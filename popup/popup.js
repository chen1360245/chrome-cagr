/**
 * Smart CAGR Calculator - Chrome Extension Popup
 * Main JavaScript logic for the extension
 */

// ==================== State Management ====================
let currentInputs = {
  pv: undefined,
  fv: undefined,
  n: undefined,
  r: undefined,
};

let currentResult = null;

// ==================== DOM Elements ====================
const elements = {
  // Inputs
  inputPV: null,
  inputFV: null,
  inputN: null,
  inputR: null,
  // Status indicators
  statusPV: null,
  statusFV: null,
  statusN: null,
  statusR: null,
  // Buttons
  btnCalculate: null,
  btnClear: null,
  // Display
  modeIndicator: null,
  modeText: null,
  formulaDisplay: null,
  errorMessage: null,
  errorText: null,
  resultsPanel: null,
  // Results
  resultLabel: null,
  resultValue: null,
  metricCAGR: null,
  metricTotal: null,
  metricSub: null,
  insights: null,
  explanationText: null,
  // Language
  languageSelector: null,
};

// ==================== i18n (Internationalization) ====================
let currentLanguage = 'en';
let translations = {};

// Load translations for a specific language
async function loadLanguage(lang) {
  try {
    const response = await fetch(`../_locales/${lang}/messages.json`);
    if (!response.ok) {
      console.warn(`Failed to load language ${lang}, falling back to English`);
      lang = 'en';
      const fallbackResponse = await fetch(`../_locales/en/messages.json`);
      translations = await fallbackResponse.json();
    } else {
      translations = await response.json();
    }
    currentLanguage = lang;
    return true;
  } catch (error) {
    console.error('Error loading language:', error);
    return false;
  }
}

function getMessage(key, substitutions) {
  if (!translations[key]) {
    console.warn(`Missing translation for key: ${key}`);
    return key;
  }

  let message = translations[key].message || key;

  // Handle placeholders
  if (substitutions) {
    const subs = Array.isArray(substitutions) ? substitutions : [substitutions];
    subs.forEach((sub, index) => {
      const placeholder = `$${index + 1}$`;
      message = message.replace(placeholder, sub);
    });
  }

  return message;
}

function translatePage() {
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = getMessage(key);
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = getMessage(key);
  });

  // Update document title
  document.title = getMessage('appName');

  // Re-translate dynamic content if exists
  if (currentResult) {
    displayResults(currentResult);
  } else {
    // Update mode indicator text
    elements.modeText.innerHTML = `💡 ${getMessage('errorFillThree')}`;
  }
}

// ==================== Input Handling ====================
function parseInputValue(value) {
  if (!value || value.trim() === '') return undefined;
  const cleaned = value.replace(/[^0-9.-]/g, '');
  const num = parseFloat(cleaned);
  return isNaN(num) ? undefined : num;
}

function updateInputStatus(field, value) {
  const statusElement = elements[`status${field.toUpperCase()}`];
  if (!statusElement) return;

  if (value !== undefined && value > 0) {
    statusElement.textContent = '✓';
    statusElement.className = 'input-status status-valid';
  } else {
    statusElement.textContent = '';
    statusElement.className = 'input-status';
  }
}

function handleInputChange(field, inputElement) {
  let rawValue = inputElement.value;

  // Format input based on field type
  if (field === 'pv' || field === 'fv') {
    rawValue = formatInputNumber(rawValue);
    inputElement.value = rawValue;
  } else if (field === 'r') {
    rawValue = formatPercentageInput(rawValue);
    inputElement.value = rawValue;
  }

  // Parse and store value
  const numericValue = parseInputValue(rawValue);
  currentInputs[field] = numericValue;

  // Update status indicator
  updateInputStatus(field, numericValue);

  // Update mode detection
  updateModeDetection();

  // Clear previous results
  hideResults();
  hideError();
}

// ==================== Mode Detection ====================
function updateModeDetection() {
  const detection = SmartCAGRCalculator.detectMode(currentInputs);

  if (detection.filledCount < 3) {
    elements.modeText.innerHTML = `💡 ${getMessage('errorFillThree')}`;
    elements.formulaDisplay.textContent = '-';
    elements.btnCalculate.disabled = true;
    return;
  }

  if (!detection.isValid || !detection.mode) {
    elements.modeText.innerHTML = `⚠️ ${detection.errors[0]?.message || getMessage('errorInvalidValue')}`;
    elements.formulaDisplay.textContent = '-';
    elements.btnCalculate.disabled = true;
    return;
  }

  // Display detected mode
  let modeName = '';
  let formula = '';

  switch (detection.mode) {
    case 'CAGR':
      modeName = getMessage('modeCAGR');
      formula = 'CAGR = (FV / PV)^(1/n) - 1';
      break;
    case 'FV':
      modeName = getMessage('modeFinalValue');
      formula = 'FV = PV × (1 + r)^n';
      break;
    case 'PV':
      modeName = getMessage('modeInitialValue');
      formula = 'PV = FV / (1 + r)^n';
      break;
    case 'TIME':
      modeName = getMessage('modeTimePeriod');
      formula = 'n = log(FV / PV) / log(1 + r)';
      break;
  }

  elements.modeText.innerHTML = getMessage('modeDetected', [modeName]);
  elements.formulaDisplay.textContent = formula;
  elements.btnCalculate.disabled = false;
}

// ==================== Calculation ====================
function calculate() {
  hideError();

  try {
    // Convert percentage to decimal for calculation
    const calculationInputs = {
      pv: currentInputs.pv,
      fv: currentInputs.fv,
      n: currentInputs.n,
      r: currentInputs.r !== undefined ? currentInputs.r / 100 : undefined,
    };

    // Perform calculation
    currentResult = SmartCAGRCalculator.calculate(calculationInputs);

    // Display results
    displayResults(currentResult);
  } catch (error) {
    showError(error.message || getMessage('errorCalculationFailed'));
  }
}

// ==================== Results Display ====================
function displayResults(result) {
  // Show results panel
  elements.resultsPanel.classList.remove('hidden');

  // Determine result label based on mode
  let resultLabel = '';
  let resultValueText = '';

  switch (result.mode) {
    case 'CAGR':
      resultLabel = getMessage('modeCAGR');
      resultValueText = formatPercentage(result.result);
      break;
    case 'FV':
      resultLabel = getMessage('modeFinalValue');
      resultValueText = formatCurrency(result.result);
      break;
    case 'PV':
      resultLabel = getMessage('modeInitialValue');
      resultValueText = formatCurrency(result.result);
      break;
    case 'TIME':
      resultLabel = getMessage('modeTimePeriod');
      resultValueText = `${result.result.toFixed(1)} ${getMessage('inputTimePeriod').toLowerCase()}`;
      break;
  }

  elements.resultLabel.textContent = resultLabel;
  elements.resultValue.textContent = resultValueText;

  // Display metrics
  const { metrics, inputs } = result;
  elements.metricCAGR.textContent = formatPercentage(inputs.r);
  elements.metricTotal.textContent = `+${metrics.totalGrowth.toFixed(2)}%`;
  elements.metricSub.textContent = getMessage('resultOverYears', [inputs.n.toFixed(0)]);

  // Display insights
  displayInsights(metrics, inputs);

  // Display explanation (translated)
  const translatedExplanation = getTranslatedExplanation(result);
  elements.explanationText.textContent = translatedExplanation;

  // Scroll to results
  setTimeout(() => {
    elements.resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function getTranslatedExplanation(result) {
  const { mode, inputs } = result;
  const { pv, fv, n, r } = inputs;

  // Format numbers for display
  const pvFormatted = formatCurrency(pv);  // e.g., "$100"
  const fvFormatted = formatCurrency(fv);  // e.g., "$200"
  const nFormatted = n.toFixed(n >= 10 ? 0 : 1);  // e.g., "5" or "5.5"
  const rFormatted = (r * 100).toFixed(2);  // e.g., "14.87"

  // Get the explanation key based on mode
  let explanationKey = '';
  switch (mode) {
    case 'CAGR':
      explanationKey = 'explanationCAGR';
      break;
    case 'FV':
      explanationKey = 'explanationFV';
      break;
    case 'PV':
      explanationKey = 'explanationPV';
      break;
    case 'TIME':
      explanationKey = 'explanationTIME';
      break;
    default:
      return result.explanation; // Fallback to original
  }

  // Get the translated template
  let text = getMessage(explanationKey);

  // Replace the placeholders with actual values
  text = text.replace(/_PV_/g, pvFormatted);
  text = text.replace(/_FV_/g, fvFormatted);
  text = text.replace(/_N_/g, nFormatted);
  text = text.replace(/_R_/g, rFormatted);

  return text;
}

function displayInsights(metrics, inputs) {
  const insights = [];

  // Doubling time insight
  if (metrics.doublingTime !== Infinity && metrics.doublingTime < 100) {
    insights.push({
      icon: '💡',
      text: getMessage('insightDoubling', [metrics.doublingTime.toFixed(1)]),
    });
  }

  // Benchmark comparison (S&P 500 average: 10.5%)
  const sp500Average = 0.105;
  if (inputs.r > sp500Average) {
    insights.push({
      icon: '✅',
      text: getMessage('insightBeatingMarket'),
    });
  } else if (inputs.r < sp500Average) {
    insights.push({
      icon: 'ℹ️',
      text: getMessage('insightBelowMarket'),
    });
  }

  // High return warning
  if (metrics.cagr > 25) {
    insights.push({
      icon: '⚠️',
      text: getMessage('insightHighReturn'),
    });
  }

  // Render insights
  elements.insights.innerHTML = insights
    .map(insight => `<p class="insight-item">${insight.icon} ${insight.text}</p>`)
    .join('');
}

// ==================== UI Helpers ====================
function showError(message) {
  elements.errorMessage.classList.remove('hidden');
  elements.errorText.textContent = message;
}

function hideError() {
  elements.errorMessage.classList.add('hidden');
  elements.errorText.textContent = '';
}

function hideResults() {
  elements.resultsPanel.classList.add('hidden');
}

function clearAll() {
  // Clear inputs
  elements.inputPV.value = '';
  elements.inputFV.value = '';
  elements.inputN.value = '';
  elements.inputR.value = '';

  // Clear state
  currentInputs = {
    pv: undefined,
    fv: undefined,
    n: undefined,
    r: undefined,
  };
  currentResult = null;

  // Clear status indicators
  updateInputStatus('pv', undefined);
  updateInputStatus('fv', undefined);
  updateInputStatus('n', undefined);
  updateInputStatus('r', undefined);

  // Hide results and errors
  hideResults();
  hideError();

  // Reset mode indicator
  elements.modeText.innerHTML = `💡 ${getMessage('errorFillThree')}`;
  elements.formulaDisplay.textContent = '-';
  elements.btnCalculate.disabled = true;

  // Focus first input
  elements.inputPV.focus();
}

// ==================== Language Handling ====================
async function handleLanguageChange() {
  const selectedLang = elements.languageSelector.value;

  // Load the new language
  const loaded = await loadLanguage(selectedLang);

  if (loaded) {
    // Save preference
    chrome.storage.local.set({ preferredLanguage: selectedLang });

    // Re-translate the entire page
    translatePage();

    console.log(`Language switched to: ${selectedLang}`);
  } else {
    console.error('Failed to load language');
  }
}

// ==================== Initialization ====================
function initializeElements() {
  // Inputs
  elements.inputPV = document.getElementById('inputPV');
  elements.inputFV = document.getElementById('inputFV');
  elements.inputN = document.getElementById('inputN');
  elements.inputR = document.getElementById('inputR');

  // Status indicators
  elements.statusPV = document.getElementById('statusPV');
  elements.statusFV = document.getElementById('statusFV');
  elements.statusN = document.getElementById('statusN');
  elements.statusR = document.getElementById('statusR');

  // Buttons
  elements.btnCalculate = document.getElementById('btnCalculate');
  elements.btnClear = document.getElementById('btnClear');

  // Display
  elements.modeIndicator = document.getElementById('modeIndicator');
  elements.modeText = document.getElementById('modeText');
  elements.formulaDisplay = document.getElementById('formulaDisplay');
  elements.errorMessage = document.getElementById('errorMessage');
  elements.errorText = document.getElementById('errorText');
  elements.resultsPanel = document.getElementById('resultsPanel');

  // Results
  elements.resultLabel = document.getElementById('resultLabel');
  elements.resultValue = document.getElementById('resultValue');
  elements.metricCAGR = document.getElementById('metricCAGR');
  elements.metricTotal = document.getElementById('metricTotal');
  elements.metricSub = document.getElementById('metricSub');
  elements.insights = document.getElementById('insights');
  elements.explanationText = document.getElementById('explanationText');

  // Language
  elements.languageSelector = document.getElementById('languageSelector');
}

function attachEventListeners() {
  // Input change events
  elements.inputPV.addEventListener('input', () => handleInputChange('pv', elements.inputPV));
  elements.inputFV.addEventListener('input', () => handleInputChange('fv', elements.inputFV));
  elements.inputN.addEventListener('input', () => handleInputChange('n', elements.inputN));
  elements.inputR.addEventListener('input', () => handleInputChange('r', elements.inputR));

  // Button events
  elements.btnCalculate.addEventListener('click', calculate);
  elements.btnClear.addEventListener('click', clearAll);

  // Language selector
  elements.languageSelector.addEventListener('change', handleLanguageChange);

  // Enter key to calculate
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !elements.btnCalculate.disabled) {
      calculate();
    }
  });
}

async function loadSavedPreferences() {
  // Load saved language preference
  return new Promise((resolve) => {
    chrome.storage.local.get(['preferredLanguage'], async (result) => {
      let lang = result.preferredLanguage || 'zh_CN'; // Default to Chinese

      // Update selector
      if (elements.languageSelector) {
        elements.languageSelector.value = lang;
      }

      // Load the language
      await loadLanguage(lang);
      resolve();
    });
  });
}

// ==================== Main Initialization ====================
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize DOM elements first
  initializeElements();

  // Load saved preferences and language
  await loadSavedPreferences();

  // Translate page with loaded language
  translatePage();

  // Attach event listeners
  attachEventListeners();

  // Set initial state
  elements.btnCalculate.disabled = true;

  // Focus first input
  elements.inputPV.focus();

  console.log('Smart CAGR Calculator initialized ✓');
});

import { Locale } from '@/i18n/config'
import { HowTo, HowToStep } from './types'

/**
 * HowTo Schema for CAGR Calculator
 *
 * Shows step-by-step instructions in search results.
 * Benefits:
 * - Steps appear in Google search results
 * - Shows as "How to" rich snippet
 * - Increases click-through rate
 * - Makes your tool more accessible
 *
 * @param locale - Current language
 * @returns HowTo JSON-LD schema
 */
export function getHowToSchema(locale: Locale): HowTo {
  const baseUrl = 'https://cagrcalculator.app'

  // Define steps in different languages
  const titles: Record<Locale, string> = {
    en: 'How to Use the CAGR Calculator',
    'zh-CN': '如何使用CAGR计算器',
    es: 'Cómo Usar la Calculadora CAGR',
    de: 'So Verwenden Sie den CAGR-Rechner',
    ja: 'CAGR計算機の使い方',
    ar: 'كيفية استخدام حاسبة CAGR',
    fr: 'Comment Utiliser le Calculateur CAGR',
    'pt-BR': 'Como Usar a Calculadora CAGR',
    ko: 'CAGR 계산기 사용 방법',
  }

  const descriptions: Record<Locale, string> = {
    en: 'Learn how to calculate compound annual growth rate using our free CAGR calculator. Enter any 3 values to automatically calculate the 4th parameter.',
    'zh-CN': '了解如何使用我们的免费CAGR计算器计算复合年增长率。输入任意3个值即可自动计算第4个参数。',
    es: 'Aprenda a calcular la tasa de crecimiento anual compuesta usando nuestra calculadora CAGR gratuita. Ingrese cualquier 3 valores para calcular automáticamente el cuarto parámetro.',
    de: 'Erfahren Sie, wie Sie mit unserem kostenlosen CAGR-Rechner die durchschnittliche jährliche Wachstumsrate berechnen. Geben Sie beliebige 3 Werte ein, um automatisch den 4. Parameter zu berechnen.',
    ja: '無料のCAGR計算機を使用して年平均成長率を計算する方法を学びます。任意の3つの値を入力すると、4番目のパラメータが自動的に計算されます。',
    ar: 'تعلم كيفية حساب معدل النمو السنوي المركب باستخدام حاسبة CAGR المجانية. أدخل أي 3 قيم لحساب المعامل الرابع تلقائيًا.',
    fr: 'Apprenez à calculer le taux de croissance annuel composé avec notre calculateur CAGR gratuit. Entrez 3 valeurs pour calculer automatiquement le 4ème paramètre.',
    'pt-BR':
      'Aprenda a calcular a taxa de crescimento anual composta usando nossa calculadora CAGR gratuita. Insira qualquer 3 valores para calcular automaticamente o 4º parâmetro.',
    ko: '무료 CAGR 계산기를 사용하여 연평균 성장률을 계산하는 방법을 배우세요. 임의의 3개 값을 입력하면 4번째 매개변수가 자동으로 계산됩니다.',
  }

  const stepsData: Record<Locale, Array<{ name: string; text: string }>> = {
    en: [
      {
        name: 'Visit the CAGR Calculator',
        text: 'Go to the CAGR Calculator homepage on any device (desktop, mobile, or tablet).',
      },
      {
        name: 'Enter Any 3 Values',
        text: 'Fill in any 3 out of 4 fields: Initial Value, Final Value, Time Period (Years), or CAGR Rate (%). The calculator will automatically detect which parameter to calculate.',
      },
      {
        name: 'Click Calculate',
        text: 'Click the "Calculate Now" button. The calculator will instantly compute the missing value using the CAGR formula.',
      },
      {
        name: 'Review Results',
        text: 'View your detailed results including the calculated value, total growth percentage, absolute return, and benchmark comparison.',
      },
    ],
    'zh-CN': [
      {
        name: '访问CAGR计算器',
        text: '在任何设备（台式机、手机或平板电脑）上访问CAGR计算器主页。',
      },
      {
        name: '输入任意3个值',
        text: '填写4个字段中的任意3个：初始值、最终值、时间段（年）或CAGR率（%）。计算器将自动检测要计算的参数。',
      },
      {
        name: '点击计算',
        text: '点击"立即计算"按钮。计算器将使用CAGR公式立即计算缺失值。',
      },
      {
        name: '查看结果',
        text: '查看详细结果，包括计算值、总增长百分比、绝对收益和基准比较。',
      },
    ],
    es: [
      {
        name: 'Visite la Calculadora CAGR',
        text: 'Vaya a la página principal de la Calculadora CAGR en cualquier dispositivo (escritorio, móvil o tableta).',
      },
      {
        name: 'Ingrese Cualquier 3 Valores',
        text: 'Complete 3 de 4 campos: Valor Inicial, Valor Final, Período de Tiempo (Años) o Tasa CAGR (%). La calculadora detectará automáticamente qué parámetro calcular.',
      },
      {
        name: 'Haga Clic en Calcular',
        text: 'Haga clic en el botón "Calcular Ahora". La calculadora calculará instantáneamente el valor faltante usando la fórmula CAGR.',
      },
      {
        name: 'Revise los Resultados',
        text: 'Vea sus resultados detallados incluyendo el valor calculado, porcentaje de crecimiento total, retorno absoluto y comparación con referencias.',
      },
    ],
    de: [
      {
        name: 'Besuchen Sie den CAGR-Rechner',
        text: 'Gehen Sie auf jedem Gerät (Desktop, Handy oder Tablet) zur CAGR-Rechner-Homepage.',
      },
      {
        name: 'Geben Sie Beliebige 3 Werte Ein',
        text: 'Füllen Sie 3 von 4 Feldern aus: Anfangswert, Endwert, Zeitraum (Jahre) oder CAGR-Rate (%). Der Rechner erkennt automatisch, welcher Parameter berechnet werden soll.',
      },
      {
        name: 'Klicken Sie auf Berechnen',
        text: 'Klicken Sie auf die Schaltfläche "Jetzt Berechnen". Der Rechner berechnet sofort den fehlenden Wert mit der CAGR-Formel.',
      },
      {
        name: 'Überprüfen Sie die Ergebnisse',
        text: 'Sehen Sie Ihre detaillierten Ergebnisse einschließlich des berechneten Werts, des Gesamtwachstumsprozentsatzes, der absoluten Rendite und des Benchmark-Vergleichs.',
      },
    ],
    ja: [
      {
        name: 'CAGR計算機にアクセス',
        text: 'デスクトップ、モバイル、タブレットなど、任意のデバイスでCAGR計算機のホームページにアクセスします。',
      },
      {
        name: '任意の3つの値を入力',
        text: '4つのフィールドのうち3つを入力：初期値、最終値、期間（年）、またはCAGR率（%）。計算機は自動的に計算するパラメータを検出します。',
      },
      {
        name: '計算をクリック',
        text: '「今すぐ計算」ボタンをクリックします。計算機はCAGR式を使用して不足している値を即座に計算します。',
      },
      {
        name: '結果を確認',
        text: '計算値、総成長率、絶対リターン、ベンチマーク比較を含む詳細な結果を表示します。',
      },
    ],
    ar: [
      {
        name: 'قم بزيارة حاسبة CAGR',
        text: 'انتقل إلى الصفحة الرئيسية لحاسبة CAGR على أي جهاز (سطح المكتب أو الهاتف المحمول أو الجهاز اللوحي).',
      },
      {
        name: 'أدخل أي 3 قيم',
        text: 'املأ 3 من 4 حقول: القيمة الأولية، القيمة النهائية، الفترة الزمنية (بالسنوات)، أو معدل CAGR (٪). ستكتشف الآلة الحاسبة تلقائيًا المعامل المراد حسابه.',
      },
      {
        name: 'انقر فوق حساب',
        text: 'انقر فوق زر "احسب الآن". ستحسب الآلة الحاسبة على الفور القيمة المفقودة باستخدام صيغة CAGR.',
      },
      {
        name: 'راجع النتائج',
        text: 'عرض النتائج التفصيلية بما في ذلك القيمة المحسوبة ونسبة النمو الإجمالية والعائد المطلق ومقارنة المعايير.',
      },
    ],
    fr: [
      {
        name: 'Visitez le Calculateur CAGR',
        text: "Accédez à la page d'accueil du Calculateur CAGR sur n'importe quel appareil (ordinateur de bureau, mobile ou tablette).",
      },
      {
        name: 'Entrez 3 Valeurs',
        text: "Remplissez 3 des 4 champs : Valeur Initiale, Valeur Finale, Période de Temps (Années) ou Taux CAGR (%). Le calculateur détectera automatiquement le paramètre à calculer.",
      },
      {
        name: 'Cliquez sur Calculer',
        text: 'Cliquez sur le bouton "Calculer Maintenant". Le calculateur calculera instantanément la valeur manquante en utilisant la formule CAGR.',
      },
      {
        name: 'Examinez les Résultats',
        text: 'Consultez vos résultats détaillés, y compris la valeur calculée, le pourcentage de croissance total, le rendement absolu et la comparaison avec les références.',
      },
    ],
    'pt-BR': [
      {
        name: 'Visite a Calculadora CAGR',
        text: 'Acesse a página inicial da Calculadora CAGR em qualquer dispositivo (desktop, celular ou tablet).',
      },
      {
        name: 'Insira Qualquer 3 Valores',
        text: 'Preencha 3 de 4 campos: Valor Inicial, Valor Final, Período de Tempo (Anos) ou Taxa CAGR (%). A calculadora detectará automaticamente qual parâmetro calcular.',
      },
      {
        name: 'Clique em Calcular',
        text: 'Clique no botão "Calcular Agora". A calculadora calculará instantaneamente o valor ausente usando a fórmula CAGR.',
      },
      {
        name: 'Revise os Resultados',
        text: 'Veja seus resultados detalhados, incluindo o valor calculado, porcentagem de crescimento total, retorno absoluto e comparação com referências.',
      },
    ],
    ko: [
      {
        name: 'CAGR 계산기 방문',
        text: '데스크톱, 모바일 또는 태블릿 등 모든 기기에서 CAGR 계산기 홈페이지로 이동합니다.',
      },
      {
        name: '임의의 3개 값 입력',
        text: '4개 필드 중 3개를 입력: 초기 값, 최종 값, 기간(연도) 또는 CAGR 비율(%). 계산기가 계산할 매개변수를 자동으로 감지합니다.',
      },
      {
        name: '계산 클릭',
        text: '"지금 계산" 버튼을 클릭합니다. 계산기가 CAGR 공식을 사용하여 누락된 값을 즉시 계산합니다.',
      },
      {
        name: '결과 검토',
        text: '계산된 값, 총 성장률, 절대 수익률 및 벤치마크 비교를 포함한 상세한 결과를 확인합니다.',
      },
    ],
  }

  // Create HowToStep objects
  const steps: HowToStep[] = stepsData[locale].map((step, index) => ({
    '@context': 'https://schema.org',
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
    position: index + 1,
    url: `${baseUrl}/${locale}#how-to-use`,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: titles[locale],
    description: descriptions[locale],
    step: steps,
    totalTime: 'PT2M', // 2 minutes (ISO 8601 duration format)
    tool: ['Computer, smartphone, or tablet', 'Internet connection'],
  }
}

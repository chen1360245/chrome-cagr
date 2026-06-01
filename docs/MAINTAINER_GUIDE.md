# Maintainer Guide

## Published Extension

- Chrome Web Store:
  https://chromewebstore.google.com/detail/smart-cagr-calculator/cpbbkfbjhcaompikhekjjfopcecomkao
- Extension privacy policy:
  https://cagrcalculator.app/en/privacy-extension
- Full web calculator:
  https://cagrcalculator.app/

## Test Locally

1. Open `chrome://extensions/`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the repository root.
5. Test each calculation mode and the language selector.

Run these syntax checks before publishing:

```bash
node --check popup/popup.js
node --check lib/calculator.js
node --check lib/formatters.js
```

Also confirm that `manifest.json` and each `_locales/*/messages.json` file
contain valid JSON.

## Prepare A Release

1. Update the version in `manifest.json`.
2. Review the store copy in [STORE_DESCRIPTION.md](STORE_DESCRIPTION.md).
3. Review the screenshots in [`store-screenshots/`](../store-screenshots/).
4. Create a release package:

   ```powershell
   ./create-zip.ps1
   ```

5. Upload `smart-cagr-calculator.zip` to the Chrome Web Store.

The zip file is generated locally and intentionally ignored by Git.

## Privacy Declaration

The extension requests only the `storage` permission. It stores the selected
language preference with `chrome.storage.local`.

The extension does not collect, transmit, or share calculation inputs,
results, browsing history, or personal information. Use the dedicated
[extension privacy policy](EXTENSION_PRIVACY_POLICY.md) for store submissions.

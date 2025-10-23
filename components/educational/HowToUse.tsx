'use client'

import { useTranslations } from 'next-intl'

export function HowToUse() {
  const t = useTranslations('page.educational.howToUse')

  const modes = [
    { number: '1', bgClass: 'border-primary/30 bg-primary/5', badgeClass: 'bg-primary' },
    { number: '2', bgClass: 'border-blue-300 bg-blue-50', badgeClass: 'bg-accent-blue' },
    { number: '3', bgClass: 'border-purple-300 bg-purple-50', badgeClass: 'bg-accent-purple' },
    { number: '4', bgClass: 'border-orange-300 bg-orange-50', badgeClass: 'bg-accent-orange' },
  ]

  const resultColors = ['text-primary', 'text-accent-blue', 'text-accent-purple', 'text-accent-orange']

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modes.map((mode, index) => (
          <div key={index} className={`border rounded-lg p-5 ${mode.bgClass}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-full ${mode.badgeClass} text-white flex items-center justify-center font-bold`}>
                {mode.number}
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{t(`modes.${index}.title`)}</h4>
            </div>
            <p className="text-gray-700 mb-3">
              {t(`modes.${index}.description`)}
            </p>
            <div className="bg-white rounded p-3 text-sm">
              <p className="font-semibold mb-2">{t(`modes.${index}.enterLabel`)}</p>
              <ul className="space-y-1 text-gray-700">
                <li>• {t(`modes.${index}.inputs.0`)}</li>
                <li>• {t(`modes.${index}.inputs.1`)}</li>
                <li>• {t(`modes.${index}.inputs.2`)}</li>
              </ul>
              <p className={`font-semibold mt-2 ${resultColors[index]}`}>{t(`modes.${index}.result`)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">{t('validationTitle')}</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>{t('validationRules.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>{t('validationRules.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>{t('validationRules.2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>{t('validationRules.3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>{t('validationRules.4')}</span>
          </li>
        </ul>
      </div>

      <div className="bg-primary/10 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">{t('interpretingTitle')}</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('interpretingItems.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('interpretingItems.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('interpretingItems.2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('interpretingItems.3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>{t('interpretingItems.4')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

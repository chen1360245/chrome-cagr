'use client'

import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('page.educational.about')

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('mainTitle')}</h3>
        <p className="text-gray-700 leading-relaxed">
          {t('mainDescription')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[0, 1, 2].map((index) => (
          <div key={index} className={`${
            index === 0 ? 'bg-green-50 border-green-200' :
            index === 1 ? 'bg-blue-50 border-blue-200' :
            'bg-purple-50 border-purple-200'
          } border rounded-lg p-5`}>
            <div className="text-3xl mb-2">{t(`features.${index}.emoji`)}</div>
            <h4 className="font-semibold text-gray-900 mb-2">{t(`features.${index}.title`)}</h4>
            <p className="text-sm text-gray-700">
              {t(`features.${index}.description`)}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">{t('keyFeaturesTitle')}</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>{t(`keyFeatures.${index}`)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h4 className="font-semibold text-gray-900 mb-2">{t('accuracyTitle')}</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{t('accuracyText')}</p>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-2">{t('technologyTitle')}</h4>
        <p className="text-gray-700 text-sm mb-3">
          {t('technologyIntro')}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.raw('technologies').map((tech: string) => (
            <span
              key={tech}
              className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <p className="text-gray-600 text-sm">
          {t('madeWith')}
          <br />
          <span className="text-xs text-gray-500">
            {t('copyright', { year: new Date().getFullYear() })}
          </span>
        </p>
      </div>
    </div>
  )
}

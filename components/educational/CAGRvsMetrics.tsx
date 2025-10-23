'use client'

import { useTranslations } from 'next-intl'

export function CAGRvsMetrics() {
  const t = useTranslations('page.educational.cagrVsMetrics')

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                {t('tableHeaders.metric')}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                {t('tableHeaders.description')}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                {t('tableHeaders.bestFor')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[0, 1, 2, 3, 4].map((index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className={`px-4 py-3 font-semibold ${index === 0 ? 'text-primary' : 'text-gray-900'}`}>
                  {t(`metrics.${index}.name`)}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {t(`metrics.${index}.description`)}
                </td>
                <td className="px-4 py-3 text-gray-700">
                  {t(`metrics.${index}.bestFor`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h4 className="font-semibold text-green-900 mb-3">{t('advantagesTitle')}</h4>
          <ul className="space-y-2 text-green-800">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start gap-2">
                <span>•</span>
                <span>{t(`advantages.${index}`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <h4 className="font-semibold text-orange-900 mb-3">{t('limitationsTitle')}</h4>
          <ul className="space-y-2 text-orange-800">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index} className="flex items-start gap-2">
                <span>•</span>
                <span>{t(`limitations.${index}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">{t('exampleTitle')}</h4>
        <p className="text-gray-700 mb-3">
          {t('exampleIntro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded p-3">
            <p className="font-semibold text-gray-900 mb-2">{t('simpleAverageTitle')}</p>
            <p className="text-gray-700">{t('simpleAverageCalc')}</p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="font-semibold text-gray-900 mb-2">{t('cagrTitle')}</p>
            <p className="text-gray-700">{t('cagrCalc')}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-3 text-sm">{t('exampleNotice')}</p>
      </div>
    </div>
  )
}

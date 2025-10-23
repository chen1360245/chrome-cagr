'use client'

import { TrendingUp, Wallet, Building2, PieChart as PieChartIcon, LineChart as LineChartIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function UseCases() {
  const t = useTranslations('page.educational.useCases')

  const useCases = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('cases.0.title'),
      description: t('cases.0.description'),
      example: t('cases.0.example'),
      color: 'bg-green-50 border-green-200 text-green-900',
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: t('cases.1.title'),
      description: t('cases.1.description'),
      example: t('cases.1.example'),
      color: 'bg-blue-50 border-blue-200 text-blue-900',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t('cases.2.title'),
      description: t('cases.2.description'),
      example: t('cases.2.example'),
      color: 'bg-purple-50 border-purple-200 text-purple-900',
    },
    {
      icon: <PieChartIcon className="w-6 h-6" />,
      title: t('cases.3.title'),
      description: t('cases.3.description'),
      example: t('cases.3.example'),
      color: 'bg-orange-50 border-orange-200 text-orange-900',
    },
    {
      icon: <LineChartIcon className="w-6 h-6" />,
      title: t('cases.4.title'),
      description: t('cases.4.description'),
      example: t('cases.4.example'),
      color: 'bg-pink-50 border-pink-200 text-pink-900',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        {t('intro')}
      </p>

      <div className="grid grid-cols-1 gap-5">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`border rounded-lg p-5 ${useCase.color} transition-transform hover:scale-[1.02]`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{useCase.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                <p className="mb-3 leading-relaxed">{useCase.description}</p>
                <div className="bg-white/60 rounded px-3 py-2 text-sm font-mono">
                  {useCase.example}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">{t('whenToUseTitle')}</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>{t('whenToUse.0')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>{t('whenToUse.1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>{t('whenToUse.2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>{t('whenToUse.3')}</span>
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          {t('footer')}
        </p>
      </div>
    </div>
  )
}

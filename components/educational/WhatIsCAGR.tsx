'use client'

import { useTranslations } from 'next-intl'

export function WhatIsCAGR() {
  const t = useTranslations('page.educational.whatIsCAGR')

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-700 leading-relaxed">{t('intro')}</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-800">{t('highlight')}</p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">{t('whyTitle')}</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>{t('advantages.smoothens.title')}</strong> {t('advantages.smoothens.text')}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>{t('advantages.comparison.title')}</strong> {t('advantages.comparison.text')}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>{t('advantages.compound.title')}</strong> {t('advantages.compound.text')}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>{t('advantages.forecast.title')}</strong> {t('advantages.forecast.text')}
          </span>
        </li>
      </ul>

      <div className="bg-primary/10 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">{t('keyInsightTitle')}</h4>
        <p className="text-gray-700">{t('keyInsightText')}</p>
      </div>
    </div>
  )
}

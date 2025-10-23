'use client'

import { useTranslations } from 'next-intl'

export function FormulaExplained() {
  const t = useTranslations('page.educational.formula')

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('title')}</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <code className="text-2xl font-mono text-gray-900">
            CAGR = (FV / PV)<sup>(1/n)</sup> - 1
          </code>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">{t('whereTitle')}</h4>
        <dl className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">{t('variables.fv.term')}</dt>
            <dd className="text-gray-700">{t('variables.fv.definition')}</dd>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">{t('variables.pv.term')}</dt>
            <dd className="text-gray-700">{t('variables.pv.definition')}</dd>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">{t('variables.n.term')}</dt>
            <dd className="text-gray-700">{t('variables.n.definition')}</dd>
          </div>
        </dl>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h4 className="font-semibold text-gray-900 mb-2">{t('stepByStepTitle')}</h4>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>{t('steps.0')}</li>
          <li>{t('steps.1')}</li>
          <li>{t('steps.2')}</li>
          <li>{t('steps.3')}</li>
        </ol>
      </div>

      <div className="bg-primary/10 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">{t('exampleTitle')}</h4>
        <div className="space-y-2 text-gray-700">
          <p>{t('example.given')}</p>
          <p>{t('example.step1')}</p>
          <p>{t('example.step2')}</p>
          <p>{t('example.step3')}</p>
          <p>{t('example.result')}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {t('smartCalcTitle')}
        </h4>
        <p className="text-gray-700 mb-3">
          {t('smartCalcIntro')}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="bg-white border border-gray-200 rounded-lg p-3">{t('modes.cagr')}</li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">{t('modes.fv')}</li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">{t('modes.pv')}</li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">{t('modes.time')}</li>
        </ul>
      </div>
    </div>
  )
}

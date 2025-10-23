'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function FAQ() {
  const t = useTranslations('page.educational.faq')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0) // First question expanded by default

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // Get the number of FAQ questions dynamically
  const faqCount = 10

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-700 mb-6">
        {t('intro')}
      </p>

      <div className="space-y-3">
        {Array.from({ length: faqCount }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-primary/50 transition-colors"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              aria-expanded={expandedIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{t(`questions.${index}.question`)}</span>
              {expandedIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{t(`questions.${index}.answer`)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">{t('stillHaveQuestionsTitle')}</h4>
        <p className="text-gray-700">
          {t('stillHaveQuestionsText')}
        </p>
      </div>
    </div>
  )
}

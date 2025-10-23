import { Locale } from '@/i18n/config'
import { WebApplication } from './types'

/**
 * WebApplication Schema for CAGR Calculator
 *
 * Tells Google this is a calculator/tool application.
 * Benefits:
 * - Appears as "Web Application" in search results
 * - Shows as "Free" with rating (if available)
 * - Better visibility in search results
 *
 * @param locale - Current language
 * @returns WebApplication JSON-LD schema
 */
export function getWebApplicationSchema(locale: Locale): WebApplication {
  const baseUrl = 'https://cagrcalculator.app'

  const descriptions: Record<Locale, string> = {
    en: 'Free online CAGR (Compound Annual Growth Rate) calculator. Calculate any missing parameter: beginning value, ending value, number of years, or CAGR. Instant results with detailed explanations.',
    'zh-CN':
      '免费在线CAGR（复合年增长率）计算器。计算任何缺失参数：初始值、最终值、年数或CAGR。即时结果，详细说明。',
    es: 'Calculadora CAGR (Tasa de Crecimiento Anual Compuesta) gratuita en línea. Calcule cualquier parámetro faltante: valor inicial, valor final, número de años o CAGR. Resultados instantáneos con explicaciones detalladas.',
    de: 'Kostenloser Online-CAGR-Rechner (Durchschnittliche jährliche Wachstumsrate). Berechnen Sie jeden fehlenden Parameter: Anfangswert, Endwert, Anzahl der Jahre oder CAGR. Sofortige Ergebnisse mit detaillierten Erklärungen.',
    ja: '無料オンラインCAGR（年平均成長率）計算機。欠落しているパラメータを計算：初期値、最終値、年数、またはCAGR。詳細な説明付きの即座の結果。',
    ar: 'حاسبة CAGR (معدل النمو السنوي المركب) المجانية عبر الإنترنت. احسب أي معامل مفقود: القيمة الأولية، القيمة النهائية، عدد السنوات، أو CAGR. نتائج فورية مع شروحات تفصيلية.',
    fr: 'Calculateur CAGR (Taux de Croissance Annuel Composé) gratuit en ligne. Calculez tout paramètre manquant : valeur initiale, valeur finale, nombre d\'années ou CAGR. Résultats instantanés avec explications détaillées.',
    'pt-BR':
      'Calculadora CAGR (Taxa de Crescimento Anual Composta) gratuita online. Calcule qualquer parâmetro faltante: valor inicial, valor final, número de anos ou CAGR. Resultados instantâneos com explicações detalhadas.',
    ko: '무료 온라인 CAGR(연평균 성장률) 계산기. 누락된 매개변수 계산: 시작 값, 종료 값, 연수 또는 CAGR. 자세한 설명과 함께 즉각적인 결과.',
  }

  const names: Record<Locale, string> = {
    en: 'CAGR Calculator - Compound Annual Growth Rate Calculator',
    'zh-CN': 'CAGR计算器 - 复合年增长率计算器',
    es: 'Calculadora CAGR - Calculadora de Tasa de Crecimiento Anual Compuesta',
    de: 'CAGR-Rechner - Rechner für durchschnittliche jährliche Wachstumsrate',
    ja: 'CAGR計算機 - 年平均成長率計算機',
    ar: 'حاسبة CAGR - حاسبة معدل النمو السنوي المركب',
    fr: 'Calculateur CAGR - Calculateur de Taux de Croissance Annuel Composé',
    'pt-BR': 'Calculadora CAGR - Calculadora de Taxa de Crescimento Anual Composta',
    ko: 'CAGR 계산기 - 연평균 성장률 계산기',
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: names[locale],
    description: descriptions[locale],
    url: `${baseUrl}/${locale}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Modern browser recommended.',
    offers: {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CAGR Calculator',
      url: baseUrl,
    },
  }
}

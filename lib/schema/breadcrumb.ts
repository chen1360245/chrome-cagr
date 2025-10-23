import { Locale } from '@/i18n/config'
import { BreadcrumbList, ListItem } from './types'

/**
 * BreadcrumbList Schema for CAGR Calculator
 *
 * Shows page hierarchy in search results.
 * Benefits:
 * - Displays breadcrumb navigation in search results
 * - Helps users understand site structure
 * - Improves navigation UX
 * - Shows professionalism
 *
 * @param locale - Current language
 * @param path - Current page path (e.g., '/', '/privacy', '/terms')
 * @returns BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbListSchema(locale: Locale, path: string = '/'): BreadcrumbList {
  const baseUrl = 'https://cagrcalculator.app'

  // Define page names in different languages
  const pageNames: Record<string, Record<Locale, string>> = {
    home: {
      en: 'Home',
      'zh-CN': '首页',
      es: 'Inicio',
      de: 'Startseite',
      ja: 'ホーム',
      ar: 'الصفحة الرئيسية',
      fr: 'Accueil',
      'pt-BR': 'Início',
      ko: '홈',
    },
    privacy: {
      en: 'Privacy Policy',
      'zh-CN': '隐私政策',
      es: 'Política de Privacidad',
      de: 'Datenschutzrichtlinie',
      ja: 'プライバシーポリシー',
      ar: 'سياسة الخصوصية',
      fr: 'Politique de Confidentialité',
      'pt-BR': 'Política de Privacidade',
      ko: '개인정보 보호정책',
    },
    terms: {
      en: 'Terms of Service',
      'zh-CN': '服务条款',
      es: 'Términos de Servicio',
      de: 'Nutzungsbedingungen',
      ja: '利用規約',
      ar: 'شروط الخدمة',
      fr: "Conditions d'Utilisation",
      'pt-BR': 'Termos de Serviço',
      ko: '서비스 약관',
    },
  }

  // Build breadcrumb items based on current path
  const items: ListItem[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 1,
      name: pageNames.home[locale],
      item: `${baseUrl}/${locale}`,
    },
  ]

  // Add additional breadcrumb items based on path
  if (path.includes('/privacy')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames.privacy[locale],
      item: `${baseUrl}/${locale}/privacy`,
    })
  } else if (path.includes('/terms')) {
    items.push({
      '@context': 'https://schema.org',
      '@type': 'ListItem',
      position: 2,
      name: pageNames.terms[locale],
      item: `${baseUrl}/${locale}/terms`,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

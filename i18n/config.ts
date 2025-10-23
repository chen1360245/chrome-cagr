// 支持的语言配置（阶段3：9种语言覆盖全球市场）
export const locales = ['en', 'zh-CN', 'es', 'de', 'ja', 'ar', 'fr', 'pt-BR', 'ko'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// 语言显示名称
export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  es: 'Español',
  de: 'Deutsch',
  ja: '日本語',
  ar: 'العربية',
  fr: 'Français',
  'pt-BR': 'Português (Brasil)',
  ko: '한국어',
}

// 语言国旗emoji
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-CN': '🇨🇳',
  es: '🇪🇸',
  de: '🇩🇪',
  ja: '🇯🇵',
  ar: '🇸🇦',
  fr: '🇫🇷',
  'pt-BR': '🇧🇷',
  ko: '🇰🇷',
}

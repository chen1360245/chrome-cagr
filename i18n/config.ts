// 支持的语言配置（阶段2：英语 + 简体中文 + 西班牙语 + 德语 + 日语 + 阿拉伯语）
export const locales = ['en', 'zh-CN', 'es', 'de', 'ja', 'ar'] as const
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
}

// 语言国旗emoji
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-CN': '🇨🇳',
  es: '🇪🇸',
  de: '🇩🇪',
  ja: '🇯🇵',
  ar: '🇸🇦',
}

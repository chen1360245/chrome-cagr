// 支持的语言配置（阶段1：英语 + 简体中文）
export const locales = ['en', 'zh-CN'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// 语言显示名称
export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-CN': '简体中文',
}

// 语言国旗emoji
export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  'zh-CN': '🇨🇳',
}

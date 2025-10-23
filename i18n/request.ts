import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, defaultLocale, type Locale } from './config'

export default getRequestConfig(async ({ locale }) => {
  // 使用默认 locale 如果没有提供
  const activeLocale = locale || defaultLocale

  //  验证locale是否在支持的列表中
  if (!locales.includes(activeLocale as Locale)) {
    notFound()
  }

  // 加载主翻译文件（已包含教育内容）
  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  }
})

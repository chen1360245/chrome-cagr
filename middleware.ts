import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  // 支持的所有语言
  locales,
  // 默认语言（英文）
  defaultLocale,
  // 总是显示语言前缀在URL中
  localePrefix: 'always',
  // 关闭自动检测，总是使用默认语言（英文）
  localeDetection: false,
})

export const config = {
  // 匹配除了以下之外的所有路径：
  // - api routes
  // - _next/static (静态文件)
  // - _next/image (图片优化)
  // - favicon.ico
  // - 所有静态资源文件 (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .css, .js)
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp|.*\\.ico).*)']
}

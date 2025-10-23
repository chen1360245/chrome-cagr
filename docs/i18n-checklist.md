# 多语言实施检查清单 (i18n Implementation Checklist)

## 🚀 快速开始检查

### 前置要求
- [ ] Node.js >= 18.17
- [ ] Next.js >= 13.0
- [ ] TypeScript 配置完成

### 依赖安装
```bash
# 检查并安装正确版本
npm list next-intl use-intl
npm install next-intl@^4.3.12 use-intl@^4.3.12
```

## 📁 文件结构检查

### 必需文件
- [ ] `/i18n/config.ts` - i18n配置文件
- [ ] `/i18n/request.ts` - 请求配置文件
- [ ] `/middleware.ts` - 路由中间件
- [ ] `/messages/en.json` - 英文翻译
- [ ] `/messages/zh-CN.json` - 中文翻译
- [ ] `/app/[locale]/layout.tsx` - 动态布局
- [ ] `/app/[locale]/page.tsx` - 动态页面

### 可选但推荐
- [ ] `/components/LanguageSwitcher.tsx` - 语言切换组件
- [ ] `/docs/i18n-development-guide.md` - 开发文档

## ⚙️ 配置检查

### i18n/config.ts
```typescript
✅ export const locales = ['en', 'zh-CN'] as const
✅ export const defaultLocale = 'en' as const
✅ export type Locale = (typeof locales)[number]
```

### middleware.ts
```typescript
✅ import createMiddleware from 'next-intl/middleware'
✅ localePrefix: 'always' // 或 'as-needed'
✅ matcher 配置正确
```

### next.config.js
```javascript
❌ 不需要 i18n 配置 (Next.js 13+ App Router)
✅ 其他配置正常
```

## 🔍 常见问题排查

### 1. 版本兼容性
```bash
# 运行检查命令
npm list next-intl use-intl

# 期望输出
├── next-intl@4.3.12
└── use-intl@4.3.12
```

### 2. 翻译文件格式
```bash
# 检查JSON格式
npx jsonlint messages/zh-CN.json
npx jsonlint messages/en.json

# 检查HTML标签
grep -E "<[^>]+>" messages/*.json

# 检查smart quotes
grep -E "[""'']" messages/*.json
```

### 3. 翻译键完整性
```javascript
// 创建验证脚本 check-translations.js
const enKeys = Object.keys(require('./messages/en.json'))
const zhKeys = Object.keys(require('./messages/zh-CN.json'))

const missing = enKeys.filter(k => !zhKeys.includes(k))
console.log('Missing keys:', missing)
```

## 🧪 测试检查清单

### 本地测试
- [ ] `npm run dev` 运行无错误
- [ ] 访问 `/en` 显示英文内容
- [ ] 访问 `/zh-CN` 显示中文内容
- [ ] 语言切换功能正常
- [ ] 刷新页面保持当前语言
- [ ] 404页面多语言正常

### 构建测试
- [ ] `npm run build` 无错误
- [ ] 构建输出包含所有语言路径
- [ ] 静态导出正常（如适用）

### SEO测试
- [ ] 每种语言有独立的meta标签
- [ ] alternate links设置正确
- [ ] sitemap包含所有语言URL

## 📝 组件使用规范检查

### ✅ 正确用法
```tsx
// 客户端组件
'use client'
import { useTranslations } from 'next-intl'

export function ClientComponent() {
  const t = useTranslations('section.name')
  return <p>{t('key')}</p>
}
```

```tsx
// 服务端组件
import { getTranslations } from 'next-intl/server'

export async function ServerComponent() {
  const t = await getTranslations('section.name')
  return <p>{t('key')}</p>
}
```

### ❌ 错误用法
```tsx
// 不要使用HTML
<p dangerouslySetInnerHTML={{ __html: t('key') }} />

// 不要硬编码文本
<p>硬编码的中文文本</p>

// 不要混合语言
<p>{t('chinese')} English Text</p>
```

## 🎯 性能优化检查

- [ ] 翻译文件按需加载
- [ ] 使用动态导入减小包体积
- [ ] 避免在翻译文件中存储大量数据
- [ ] 使用适当的缓存策略

## 🚨 紧急修复流程

### 翻译键显示原文问题
1. 检查翻译路径是否正确
2. 验证JSON文件格式
3. 清除.next缓存并重启

```bash
rm -rf .next
npm run dev
```

### 依赖版本冲突
```bash
# 删除并重新安装
rm -rf node_modules package-lock.json
npm install next-intl@^4.3.12 use-intl@^4.3.12
npm install
```

### HTML渲染问题
```python
# 运行清理脚本
python clean_html_from_translations.py
```

## 📊 质量指标

| 指标 | 目标 | 检查方法 |
|-----|-----|---------|
| 翻译覆盖率 | 100% | 对比翻译文件键 |
| 无HTML标签 | 0个 | grep检查 |
| 构建成功率 | 100% | CI/CD |
| 页面加载时间 | <3s | Lighthouse |
| SEO分数 | >90 | Google PageSpeed |

## 🔧 维护任务

### 每日
- [ ] 检查错误日志
- [ ] 验证关键页面

### 每周
- [ ] 更新翻译内容
- [ ] 检查新增功能的翻译

### 每月
- [ ] 审查翻译质量
- [ ] 更新文档
- [ ] 性能评估

## 📚 参考资源

- [Next.js 国际化文档](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [next-intl 官方文档](https://next-intl-docs.vercel.app/)
- [项目i18n开发指南](./i18n-development-guide.md)

## 💡 提示

> **黄金法则**:
> - 始终使用纯文本翻译
> - 保持翻译键语义化
> - 定期验证翻译完整性
> - 文档化所有特殊处理

---

*使用此检查清单确保多语言功能的正确实施和维护*

*最后更新: 2024年10月*
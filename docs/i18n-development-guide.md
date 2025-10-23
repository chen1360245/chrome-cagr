# 多语言(i18n)开发指南

> 本指南总结了CAGR Calculator项目在实施多语言支持过程中的经验教训、遇到的问题及解决方案，为后续开发其他多语言版本提供参考。

## 📋 目录

1. [技术栈和依赖](#技术栈和依赖)
2. [项目结构](#项目结构)
3. [遇到的问题及解决方案](#遇到的问题及解决方案)
4. [最佳实践](#最佳实践)
5. [实施步骤](#实施步骤)
6. [添加新语言指南](#添加新语言指南)
7. [常见陷阱和注意事项](#常见陷阱和注意事项)
8. [测试和验证](#测试和验证)

## 技术栈和依赖

### 核心依赖
```json
{
  "next-intl": "^4.3.12",
  "use-intl": "^4.3.12"
}
```

### ⚠️ 依赖版本注意事项
- **问题**：next-intl 3.x 与 use-intl 4.x 版本不兼容
- **解决**：确保两者版本保持一致 (都使用 4.x 版本)
- **验证命令**：
```bash
npm list next-intl use-intl
```

## 项目结构

```
cagr-calculator/
├── app/
│   └── [locale]/          # 动态路由，支持多语言
│       ├── layout.tsx
│       └── page.tsx
├── messages/              # 翻译文件目录
│   ├── en.json           # 英文翻译
│   └── zh-CN.json        # 中文翻译
├── i18n/
│   ├── config.ts         # i18n配置
│   └── request.ts        # 请求处理配置
├── middleware.ts         # 路由中间件
└── components/           # 组件目录
```

## 遇到的问题及解决方案

### 1. HTML标签渲染问题

#### 问题描述
翻译键显示为未翻译的文本（如 `page.educational.whatIsCAGR.intro`）

#### 错误信息
```
IntlError: FORMATTING_ERROR: The intl string context variable "strong" was not provided
```

#### 根本原因
翻译文件中包含HTML标签：
```json
"intro": "<strong>CAGR(复合年增长率)</strong>是投资..."
```

#### 解决方案
**方案1（推荐）**：移除所有HTML标签，使用纯文本
```json
// 修改前
"intro": "<strong>CAGR(复合年增长率)</strong>是投资..."

// 修改后
"intro": "CAGR(复合年增长率)是投资..."
```

组件中相应修改：
```tsx
// 修改前
<p dangerouslySetInnerHTML={{ __html: t('intro') }} />

// 修改后
<p>{t('intro')}</p>
```

**方案2**：使用next-intl的富文本功能
```tsx
t.rich('intro', {
  strong: (chunks) => <strong>{chunks}</strong>
})
```

### 2. 引号转义问题

#### 问题描述
Smart quotes（""''）导致JSON解析错误

#### 解决方案
1. 使用标准直引号：
```json
// 错误
"text": ""平滑"为单一的年化增长率"

// 正确
"text": "\"平滑\"为单一的年化增长率"
```

2. 或使用转义序列：
```json
"text": "将增长率\\\"平滑\\\"为单一的年化增长率"
```

### 3. 翻译路径问题

#### 问题描述
组件无法找到正确的翻译路径

#### 解决方案
确保翻译路径与JSON结构一致：
```tsx
// 组件中
const t = useTranslations('page.educational.whatIsCAGR')

// 对应的JSON结构
{
  "page": {
    "educational": {
      "whatIsCAGR": {
        "intro": "..."
      }
    }
  }
}
```

### 4. 文件编码问题

#### 问题描述
Windows环境下中文字符编码问题

#### 解决方案
- 所有JSON文件使用UTF-8编码
- Python脚本读写文件时指定编码：
```python
with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)
```

## 最佳实践

### 1. 翻译文件组织

```json
{
  "metadata": {
    "title": "页面标题",
    "description": "页面描述"
  },
  "layout": {
    "nav": { ... },
    "footer": { ... }
  },
  "page": {
    "hero": { ... },
    "sections": { ... }
  }
}
```

### 2. 组件中使用翻译

```tsx
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('page.section')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
```

### 3. 动态内容处理

```tsx
// 带参数的翻译
t('copyright', { year: new Date().getFullYear() })

// 对应的翻译文件
"copyright": "© {year} 版权所有"
```

### 4. 数组处理

```tsx
// 获取数组
const items = t.raw('technologies') as string[]

// 翻译文件
"technologies": ["Next.js", "React", "TypeScript"]
```

## 实施步骤

### 1. 安装依赖
```bash
npm install next-intl@^4.3.12 use-intl@^4.3.12
```

### 2. 配置i18n

创建 `i18n/config.ts`:
```typescript
export const locales = ['en', 'zh-CN'] as const
export const defaultLocale = 'en' as const
export type Locale = (typeof locales)[number]
```

### 3. 设置中间件

创建 `middleware.ts`:
```typescript
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
})

export const config = {
  matcher: ['/', '/(zh-CN|en)/:path*']
}
```

### 4. 配置请求处理

创建 `i18n/request.ts`:
```typescript
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, defaultLocale, type Locale } from './config'

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale || defaultLocale

  if (!locales.includes(activeLocale as Locale)) {
    notFound()
  }

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  }
})
```

### 5. 更新布局文件

修改 `app/[locale]/layout.tsx`:
```tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

## 添加新语言指南

### 步骤1：添加语言代码
在 `i18n/config.ts` 中添加新语言：
```typescript
export const locales = ['en', 'zh-CN', 'ja', 'es'] as const
```

### 步骤2：创建翻译文件
复制现有翻译文件并翻译：
```bash
cp messages/en.json messages/ja.json
# 编辑 messages/ja.json 进行翻译
```

### 步骤3：更新中间件matcher
在 `middleware.ts` 中更新路径匹配：
```typescript
export const config = {
  matcher: ['/', '/(zh-CN|en|ja|es)/:path*']
}
```

### 步骤4：添加语言切换选项
在语言切换器组件中添加新选项：
```tsx
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
]
```

## 常见陷阱和注意事项

### ❌ 避免的做法

1. **不要在翻译文件中使用HTML标签**
   - 使用组件层面的样式控制

2. **不要使用smart quotes**
   - 使用标准直引号或转义

3. **不要硬编码语言相关内容**
   - 所有文本都应通过翻译系统

4. **不要忽略SEO**
   - 为每种语言设置适当的meta标签

### ✅ 推荐的做法

1. **保持翻译文件结构一致**
   - 使用相同的键名结构

2. **使用语义化的键名**
   - `page.hero.title` 而不是 `text1`

3. **定期验证翻译完整性**
   - 检查所有语言文件的键是否对应

4. **使用TypeScript类型**
   - 为翻译键创建类型定义

## 测试和验证

### 1. 本地测试
```bash
# 测试中文版
npm run dev
# 访问 http://localhost:3000/zh-CN

# 测试英文版
# 访问 http://localhost:3000/en
```

### 2. 翻译完整性检查
```bash
# 检查未翻译的键
grep -r "page\." --include="*.tsx" components/ | grep -v "//\|/\*"
```

### 3. HTML标签检查
```bash
# 检查翻译文件中的HTML标签
grep -E "<[^>]+>" messages/*.json
```

### 4. 构建验证
```bash
npm run build
# 确保没有翻译相关错误
```

## 工具和脚本

### HTML标签清理脚本
```python
import json
import re

def remove_html_tags(text):
    if not isinstance(text, str):
        return text

    # 处理特殊标签
    text = re.sub(r'<br\s*/?>', ' ', text)
    text = re.sub(r'<sup>(.*?)</sup>', r'^(\1)', text)
    text = re.sub(r'<code>(.*?)</code>', r'`\1`', text)

    # 移除所有其他HTML标签
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text)

    return text.strip()
```

### 翻译键验证脚本
```javascript
const fs = require('fs')

function compareTranslations(file1, file2) {
  const json1 = JSON.parse(fs.readFileSync(file1, 'utf8'))
  const json2 = JSON.parse(fs.readFileSync(file2, 'utf8'))

  function getKeys(obj, prefix = '') {
    let keys = []
    for (let key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        keys = keys.concat(getKeys(obj[key], fullKey))
      } else {
        keys.push(fullKey)
      }
    }
    return keys
  }

  const keys1 = getKeys(json1)
  const keys2 = getKeys(json2)

  const missing1 = keys2.filter(k => !keys1.includes(k))
  const missing2 = keys1.filter(k => !keys2.includes(k))

  return { missing1, missing2 }
}
```

## 相关文档

- [多语言国际化战略方案](./i18n-strategy.md) - 语言选择策略和市场分析
- [多语言实施检查清单](./i18n-checklist.md) - 快速检查和验证清单
- [Next.js 国际化文档](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [next-intl 官方文档](https://next-intl-docs.vercel.app/)

## 总结

多语言支持的成功实施需要：
1. **正确的技术配置** - 版本兼容、路径配置
2. **规范的内容管理** - 纯文本、标准格式
3. **完整的测试流程** - 功能测试、翻译验证
4. **清晰的文档记录** - 问题记录、解决方案

遵循本指南可以避免常见问题，确保多语言功能的稳定运行。

---

*最后更新: 2024年10月*
*项目: CAGR Calculator*
*版本: 1.0.0*
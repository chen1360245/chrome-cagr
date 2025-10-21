# 📊 Google Analytics 4 设置指南

**网站名称**: CAGR Calculator
**目标**: 为网站添加 Google Analytics 4 (GA4) 跟踪代码
**预计时间**: 30分钟

---

## 🎯 第一步：创建新的媒体资源（Property）

您已经有 Google Analytics 账号了（当前显示 "MonsterTruckRace"），现在需要为 CAGR Calculator 创建一个新的媒体资源。

### 操作步骤：

1. **点击左下角的齿轮图标 ⚙️**（管理/Admin）
   - 位置：在截图中左侧边栏最底部

2. **在"媒体资源"列中，点击"创建媒体资源"**
   - 如果没有看到，请确保您在"账号"列中选择了正确的账号

3. **填写媒体资源详情**：
   ```
   媒体资源名称: CAGR Calculator

   报告时区: 选择您的时区（例如：中国标准时间 GMT+8）

   货币: CNY - 人民币 ¥（或 USD - 美元 $）
   ```

4. **点击"下一步"**

5. **填写业务详情**：
   ```
   行业类别: 金融 > 投资 或 技术 > 软件和应用

   企业规模: 小型（1-10名员工）

   业务目标（可多选）：
   ✓ 衡量网站流量
   ✓ 了解客户行为
   ✓ 优化用户体验
   ```

6. **接受服务条款**
   - 勾选"我接受《服务条款》"
   - 点击"创建"

---

## 🌐 第二步：设置数据流（Data Stream）

创建媒体资源后，会自动跳转到数据流设置：

### 操作步骤：

1. **选择平台类型**：
   - 点击 **"Web（网站）"**

2. **填写数据流详情**：
   ```
   网站网址: https://cagrcalculator.app

   数据流名称: CAGR Calculator - Production

   增强型衡量功能:
   ✓ 保持开启（建议）
     - 页面浏览量
     - 滚动次数
     - 出站点击次数
     - 网站搜索
     - 视频互动（如果有）
     - 文件下载（如果有）
   ```

3. **点击"创建数据流"**

---

## 🔑 第三步：获取测量 ID（Measurement ID）

创建数据流后，您会看到数据流详情页面：

### 找到测量 ID：

1. **数据流详情页面**会显示：
   ```
   测量 ID: G-XXXXXXXXXX
   ```
   - 格式：以 `G-` 开头，后面跟随10位字符
   - 示例：`G-1234567890`

2. **复制测量 ID**
   - 点击测量 ID 右侧的复制图标
   - 或手动选择并复制

3. **查看全局网站代码（可选）**：
   - 向下滚动找到 "全局网站代码（gtag.js）"
   - 点击展开可以看到完整的跟踪代码

   示例代码：
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 💻 第四步：添加跟踪代码到 Next.js 网站

### 方法 1：使用 Next.js Script 组件（推荐）

#### 4.1 创建 Google Analytics 组件

创建文件：`components/analytics/GoogleAnalytics.tsx`

```tsx
'use client'

import Script from 'next/script'

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
```

#### 4.2 创建环境变量文件

创建文件：`.env.local`（如果已存在则编辑）

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **重要**：将 `G-XXXXXXXXXX` 替换为您的实际测量 ID

#### 4.3 更新 .gitignore

确保 `.env.local` 在 `.gitignore` 中：

```bash
# .gitignore
.env.local
.env*.local
```

#### 4.4 在 Layout 中使用

编辑 `app/layout.tsx`，添加 Google Analytics 组件：

```tsx
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* 其他 head 内容 */}
      </head>
      <body>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}

        {children}
      </body>
    </html>
  )
}
```

---

### 方法 2：直接在 layout.tsx 添加（简单快速）

如果您想更简单，可以直接在 `app/layout.tsx` 的 `<head>` 中添加：

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

⚠️ 记得替换 `G-XXXXXXXXXX` 为您的实际测量 ID

---

## ✅ 第五步：验证安装

### 5.1 重启开发服务器

```bash
# 停止当前服务器（Ctrl+C）
# 重新启动
npm run dev
```

### 5.2 在浏览器中访问网站

打开 `http://localhost:3000`

### 5.3 使用 Chrome 扩展验证（推荐）

#### 安装 Google Analytics Debugger：
1. 访问 Chrome Web Store
2. 搜索 "Google Analytics Debugger"
3. 安装扩展
4. 刷新您的网站页面
5. 打开 Chrome DevTools（F12）→ Console 标签
6. 查看是否有 Google Analytics 的日志输出

#### 或使用 Tag Assistant：
1. 访问 Chrome Web Store
2. 搜索 "Tag Assistant Legacy"
3. 安装扩展
4. 点击扩展图标 → Enable
5. 刷新页面
6. 查看是否检测到 Google Analytics 4

### 5.4 在 Google Analytics 中实时验证

1. 返回 Google Analytics
2. 在左侧菜单中点击 **"报告" → "实时"**
3. 在浏览器中访问您的网站（`http://localhost:3000`）
4. 在 Google Analytics 实时报告中，您应该看到：
   - **当前活跃用户数**: 1（您自己）
   - **实时事件**: page_view 事件
   - **页面标题**: 您的页面标题

⏱️ **注意**：实时数据通常在 5-30 秒内显示

---

## 🚀 第六步：部署到生产环境

### 6.1 在 Vercel/Netlify 添加环境变量

如果您使用 Vercel 部署：

1. 登录 Vercel Dashboard
2. 选择您的项目
3. 进入 **Settings → Environment Variables**
4. 添加环境变量：
   ```
   Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX
   Environment: Production, Preview, Development（全选）
   ```
5. 点击 **Save**
6. 重新部署项目

### 6.2 验证生产环境

1. 访问您的生产网站 `https://cagrcalculator.app`
2. 打开 Chrome DevTools（F12）→ Network 标签
3. 过滤 `gtag`
4. 刷新页面
5. 查看是否有请求发送到 `www.google-analytics.com/g/collect`

---

## 📊 第七步：设置重要事件（推荐）

为了更好地跟踪用户行为，建议设置以下自定义事件：

### 7.1 创建事件跟踪工具函数

创建文件：`lib/analytics/events.ts`

```typescript
// Google Analytics 事件跟踪

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

// 计算完成事件
export const trackCalculation = (mode: string, inputs: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculation_complete', {
      calculation_mode: mode,
      event_category: 'calculator',
      event_label: `Mode: ${mode}`,
    })
  }
}

// 分享事件
export const trackShare = (method: 'native' | 'clipboard') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: method,
      content_type: 'calculation_result',
      event_category: 'engagement',
    })
  }
}

// Section 展开事件
export const trackSectionExpand = (sectionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_expand', {
      section_id: sectionId,
      event_category: 'engagement',
    })
  }
}

// 页面浏览事件（Next.js 路由变化）
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}
```

### 7.2 在组件中使用事件跟踪

#### 示例：在计算器中跟踪计算事件

编辑 `app/page.tsx`：

```tsx
import { trackCalculation } from '@/lib/analytics/events'

// 在计算完成后调用
const handleCalculation = (result: CalculationResult) => {
  // ... 现有计算逻辑

  // 跟踪事件
  trackCalculation(result.mode, result.inputs)
}
```

#### 示例：在分享按钮中跟踪分享事件

编辑 `components/share/ShareButton.tsx`：

```tsx
import { trackShare } from '@/lib/analytics/events'

const handleShare = async () => {
  // ... 现有分享逻辑

  if (isWebShareSupported()) {
    trackShare('native')
  } else {
    trackShare('clipboard')
  }
}
```

---

## 🎯 第八步：设置转化目标

在 Google Analytics 中设置关键事件（转化）：

1. **进入 Google Analytics**
2. **点击左下角齿轮图标 ⚙️ → 管理**
3. **在"媒体资源"列中，点击"事件"**
4. **点击"创建事件"** 或 **"将事件标记为转化"**

### 推荐标记为转化的事件：
- `calculation_complete` - 用户完成计算
- `share` - 用户分享结果
- `section_expand` - 用户查看教育内容

---

## 📈 第九步：创建自定义报告（可选）

### 9.1 创建自定义维度

1. **管理 → 媒体资源 → 自定义定义 → 自定义维度**
2. **创建自定义维度**：
   - **维度名称**: Calculation Mode
   - **事件参数**: calculation_mode
   - **描述**: 用户使用的计算模式（CAGR/FV/PV/Time）

### 9.2 创建探索报告

1. **左侧菜单 → 探索**
2. **空白探索**
3. **添加维度**：
   - 页面标题
   - 事件名称
   - Calculation Mode（自定义维度）
4. **添加指标**：
   - 事件数
   - 活跃用户数
   - 平均互动时长

---

## ✅ 验收清单

完成以下检查项以确保 Google Analytics 正确安装：

- [ ] 已在 Google Analytics 中创建新的媒体资源（CAGR Calculator）
- [ ] 已创建数据流（Web）
- [ ] 已获取测量 ID（G-XXXXXXXXXX）
- [ ] 已创建 `.env.local` 文件并添加测量 ID
- [ ] 已在代码中集成 Google Analytics 组件
- [ ] 本地开发环境测试通过（实时报告显示活跃用户）
- [ ] Chrome 扩展验证通过（Tag Assistant 检测到 GA4）
- [ ] 已在 Vercel/部署平台添加环境变量
- [ ] 生产环境验证通过（Network 标签显示 gtag 请求）
- [ ] （可选）已设置自定义事件跟踪
- [ ] （可选）已设置转化目标

---

## ⚠️ 常见问题

### Q1: 实时报告中看不到数据？

**解决方案**：
1. 检查测量 ID 是否正确
2. 清除浏览器缓存并刷新页面
3. 等待 30-60 秒（数据有延迟）
4. 检查浏览器 Console 是否有错误
5. 确认没有安装广告拦截器（可能拦截 GA 脚本）

### Q2: 本地开发环境的数据也会被跟踪吗？

**是的**，默认情况下本地开发数据也会被跟踪。

**解决方案**（可选）：只在生产环境启用 GA

```tsx
// app/layout.tsx
{process.env.NODE_ENV === 'production' &&
 process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
  <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
)}
```

### Q3: 如何排除自己的访问数据？

**方法 1**：使用 Google Analytics Opt-out 浏览器扩展
- 搜索 "Google Analytics Opt-out Browser Add-on"
- 安装后会自动排除您的访问

**方法 2**：在 GA 中创建过滤器
1. 管理 → 数据视图 → 过滤器
2. 添加过滤器：排除特定 IP 地址（您的办公室/家庭 IP）

### Q4: 数据多久后可以看到？

- **实时报告**：5-30 秒
- **标准报告**：24-48 小时（数据处理延迟）

---

## 📚 参考资源

### 官方文档：
- [Google Analytics 4 官方文档](https://support.google.com/analytics/answer/10089681)
- [Next.js Analytics 集成](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [gtag.js 开发者指南](https://developers.google.com/analytics/devguides/collection/gtagjs)

### 有用的工具：
- [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
- [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)

---

## 🎉 下一步

Google Analytics 设置完成后，建议：

1. **等待 24-48 小时**收集足够数据
2. **每周检查报告**：
   - 用户增长趋势
   - 热门页面
   - 流量来源
   - 用户行为流
3. **基于数据优化**：
   - 哪些计算模式最受欢迎？
   - 用户在哪个步骤离开？
   - 哪些内容 section 最吸引人？
4. **设置每周/每月报告邮件**

---

**设置时间**: 2025-10-21
**预计完成时间**: 30 分钟
**状态**: 待执行

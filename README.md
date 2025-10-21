# 🧠 Smart CAGR Calculator

> The world's first intelligent 4-parameter CAGR calculator

**Input any 3 values, calculate the 4th instantly**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 项目概述

SmartCAGR Calculator 是全球首个智能4参数CAGR计算器，通过创新的自动识别技术，允许用户输入任意3个投资参数（初始金额、最终金额、时间周期、增长率）自动计算第4个参数，为投资者提供全方位的复合年增长率计算解决方案。

### ✨ 核心特性

- 🎯 **4种计算模式**：支持求CAGR、求终值、求初值、求时间
- 🧠 **智能识别**：自动检测用户意图，无需手动切换模式
- 📱 **移动端优先**：Mobile-First响应式设计
- 💰 **双指标展示**：CAGR + 绝对回报双重视角
- ✅ **实时验证**：输入即时验证和视觉反馈
- 🎨 **现代UI**：基于2024-2025设计趋势

---

## 🚀 快速开始

### 前置要求

- Node.js 18+
- pnpm 8+（推荐）或 npm/yarn

### 安装

```bash
# 克隆项目
git clone https://github.com/yourusername/cagr-calculator.git
cd cagr-calculator

# 安装依赖
pnpm install
```

### 运行

```bash
# 开发模式
pnpm dev

# 打开浏览器访问
# http://localhost:3000
```

### 构建

```bash
# 生产构建
pnpm build

# 启动生产服务器
pnpm start
```

---

## 📐 4种计算模式

### Mode 1: 求CAGR（增长率）
**输入**: 初始值、最终值、时间周期
**输出**: CAGR
**公式**: `CAGR = (FV / PV)^(1/n) - 1`

**示例**: 投资$10,000，10年后变成$40,000，年化收益是多少？

### Mode 2: 求终值（最终金额）
**输入**: 初始值、CAGR、时间周期
**输出**: 最终值
**公式**: `FV = PV × (1 + r)^n`

**示例**: 投资$10,000，年化15%，10年后能赚多少？

### Mode 3: 求初值（需要投资多少）🆕
**输入**: 最终值、CAGR、时间周期
**输出**: 初始值
**公式**: `PV = FV / (1 + r)^n`

**示例**: 要在10年后有$40,000，年化15%，现在需要投多少？

### Mode 4: 求时间（需要多久）🆕
**输入**: 初始值、最终值、CAGR
**输出**: 时间周期
**公式**: `n = log(FV / PV) / log(1 + r)`

**示例**: $10,000变成$40,000，年化15%，需要多少年？

---

## 🏗️ 技术架构

### 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 14.2 | React框架（App Router） |
| **TypeScript** | 5.9 | 类型安全 |
| **Tailwind CSS** | 3.4 | 原子化CSS |
| **shadcn/ui** | Latest | UI组件库 |
| **Lucide React** | 0.445 | 图标库 |
| **Framer Motion** | 11.18 | 动画库 |
| **Recharts** | 2.15 | 图表库 |
| **React Hook Form** | 7.65 | 表单管理 |
| **Zod** | 3.25 | 数据验证 |
| **Zustand** | 4.5 | 状态管理 |

### 项目结构

```
cagr-calculator/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 根布局
│   ├── page.tsx                  # 主页（单页应用）
│   └── globals.css               # 全局样式
├── components/                   # React组件
│   ├── calculator/               # 计算器组件
│   │   ├── SmartInput.tsx        # 智能输入框
│   │   ├── ModeIndicator.tsx     # 模式指示器
│   │   └── ResultPanel.tsx       # 结果面板
│   └── ui/                       # UI基础组件
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/                          # 核心逻辑
│   ├── calculator/
│   │   └── SmartCAGRCalculator.ts # 计算引擎
│   └── utils/
│       ├── cn.ts                  # 样式工具
│       └── formatters.ts          # 格式化工具
├── hooks/                        # 自定义Hooks
│   └── useSmartCalculator.ts     # 计算器Hook
├── types/                        # TypeScript类型
│   └── calculator.ts
├── public/                       # 静态资源
├── PRD.md                        # 产品需求文档
└── REVIEW.md                     # 代码复核报告
```

---

## 🎨 设计系统

### 色彩

- **Primary**: `#00D395` (财务成长绿)
- **Accent Blue**: `#4F46E5` (强调色)
- **Success**: `#10B981` (成功状态)
- **Error**: `#EF4444` (错误状态)

### 组件规范

- **移动端输入框**: 56px高度，16px字体（防止iOS缩放）
- **按钮**: 移动端56px，桌面端48px
- **卡片**: 12px圆角，柔和阴影
- **间距**: 4px基础单位

---

## 📊 开发进度

### ✅ Phase 1 - 核心功能（已完成）

- [x] 项目初始化
- [x] 4参数计算引擎
- [x] 智能输入组件
- [x] 模式自动识别
- [x] 结果展示面板
- [x] 移动端优化

### ⏸️ Phase 2 - 可视化（待开发）

- [ ] 柱状图（逐年数据）
- [ ] 折线图（增长曲线）
- [ ] 饼图（本金vs收益）
- [ ] 时间轴（里程碑）

### ⏸️ Phase 3 - 辅助功能（待开发）

- [ ] 多场景对比
- [ ] 分享链接
- [ ] 历史记录
- [ ] 快速预设

---

## 🧪 测试

```bash
# 单元测试
pnpm test

# 测试覆盖率
pnpm test:coverage

# E2E测试（待实现）
pnpm test:e2e
```

---

## 📖 使用示例

### 基础使用

1. 打开应用
2. 在4个输入框中填写任意3个值
3. 系统自动识别计算模式
4. 点击"Calculate Now"查看结果

### 计算示例

**场景**: 退休规划

- **初始投资**: $50,000
- **目标金额**: $500,000
- **年化收益**: 10%
- **计算**: 需要多久？

**结果**: 约24.2年

---

## 🤝 贡献

欢迎贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

## 🔗 相关链接

- **产品需求文档**: [PRD.md](PRD.md)
- **代码复核报告**: [REVIEW.md](REVIEW.md)
- **官方网站**: https://cagrcalculator.app (待上线)
- **技术文档**: [docs/](docs/)

---

## 💬 反馈

如有问题或建议，请：

1. 提交 [GitHub Issue](https://github.com/yourusername/cagr-calculator/issues)
2. 发送邮件至: support@cagrcalculator.app
3. 访问我们的 [FAQ页面](#faq)

---

**Made with ❤️ for investors worldwide**

*Last Updated: 2025-10-21*

# 智能 CAGR 计算器 Chrome 插件

[English](README.md) | [简体中文](README.zh-CN.md)

一个轻量级的复合年增长率 Chrome 插件。输入任意三个数值，即可自动计算第四个数值。所有计算均在本地设备上完成。

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue)](https://chromewebstore.google.com/detail/smart-cagr-calculator/cpbbkfbjhcaompikhekjjfopcecomkao)

## 安装

请从 [Chrome Web Store](https://chromewebstore.google.com/detail/smart-cagr-calculator/cpbbkfbjhcaompikhekjjfopcecomkao)
安装已发布的插件。

当前发布版本：`1.0.0`

![Smart CAGR Calculator 计算结果](store-screenshots/01-calculation-results.png)

## 功能特性

- 计算 CAGR、最终值、初始值或时间周期
- 自动判断需要计算的参数
- 展示翻倍时间、增长摘要和市场基准对比
- 离线运行，不使用分析或遥测
- 仅在本地保存所选语言偏好
- 支持英语、简体中文、西班牙语、德语、日语、法语、巴西葡萄牙语、韩语和阿拉伯语

## 权限与隐私

插件只申请 `storage` 权限，通过 `chrome.storage.local` 保存语言偏好。

所有计算均在本地完成。插件不会传输计算输入、计算结果或浏览数据。详情请阅读
[插件隐私政策](docs/EXTENSION_PRIVACY_POLICY.md)。

## 免责声明

本插件仅用于教育和信息参考。计算结果是基于用户输入数据的估算值，不保证准确或完整，
也不应作为财务或投资决策依据。

## 从源码运行

1. 克隆仓库：

   ```bash
   git clone https://github.com/chen1360245/chrome-cagr.git
   cd chrome-cagr
   ```

2. 在 Chrome 中打开 `chrome://extensions/`。
3. 启用**开发者模式**。
4. 点击**加载已解压的扩展程序**。
5. 选择仓库根目录。

无需执行构建步骤。

## 验证命令

```bash
node tests/calculator.test.js
node --check lib/calculator.js
node --check lib/formatters.js
node --check popup/popup.js
```

## 项目结构

```text
_locales/       Chrome i18n 多语言文案
icons/          插件图标
lib/            计算和格式化工具
popup/          插件界面
manifest.json   Manifest V3 配置
```

## 关联项目

完整版网页计算器提供图表、教育内容和更多多语言页面：

- 网站：[cagrcalculator.app](https://cagrcalculator.app/)
- 网站源码：[chen1360245/cagr](https://github.com/chen1360245/cagr)

## 发布打包

使用打包脚本在本地生成 Chrome Web Store zip：

```powershell
./create-zip.ps1
```

生成的 zip 文件不会纳入 Git 版本控制。

## 参与贡献

欢迎提交 Issue 和 Pull Request。如需反馈问题或建议功能，请创建
[GitHub Issue](https://github.com/chen1360245/chrome-cagr/issues)。

## 许可证

本项目采用 [MIT License](LICENSE)。

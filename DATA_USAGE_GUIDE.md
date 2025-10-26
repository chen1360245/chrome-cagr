# Data Usage Section 完整填写指南

## ✅ 结论：您的扩展不收集用户数据

经过代码审查，确认：
- ❌ 没有使用cookie
- ❌ 没有收集任何用户数据
- ✅ 只在本地存储语言偏好（chrome.storage.local）
- ✅ 所有数据都在用户设备上，从不传输

---

## 📋 正确填写方式

### 第一部分：What user data do you plan to collect?

**所有复选框都不要勾选！**

```
☐ Personally identifiable information
☐ Health information
☐ Financial and payment information
☐ Authentication information
☐ Personal communications
☐ Location
☐ Web history
☐ User activity
☐ Website content
```

**重要：一个都不要勾选！**

---

### 第二部分：认证声明（Certifications）

**必须勾选所有三项：**

```
✅ I do not sell or transfer user data to third parties, outside of the approved use cases

✅ I do not use or transfer user data for purposes that are unrelated to my item's single purpose

✅ I do not use or transfer user data to determine creditworthiness or for lending purposes
```

**说明：**
- 这三项是Chrome Web Store的强制要求
- 所有扩展都必须勾选
- 您的扩展完全符合这些要求

---

### 第三部分：Privacy Policy URL

```
https://cagrcalculator.app/en/privacy
```

✅ 已正确填写

---

## 🤔 常见疑问解答

### Q1: 我使用了chrome.storage，这算收集数据吗？

**A:** ❌ **不算！**

**原因：**
- chrome.storage.local是**本地存储**
- 数据只保存在用户设备上
- 从不传输到服务器
- Chrome Web Store的"收集数据"定义：收集并传输到服务器的数据

**类比：**
- chrome.storage.local就像用户在自己电脑上记笔记
- Cookie + 发送到服务器 = 收集数据
- 仅本地存储 ≠ 收集数据

---

### Q2: Chrome.storage和Cookie的区别？

| 特性 | chrome.storage.local | Cookie |
|------|---------------------|--------|
| 存储位置 | 扩展本地存储 | 浏览器cookie存储 |
| 能否传输 | 不能自动传输 | 会随HTTP请求发送 |
| 是否收集数据 | ❌ 不算 | ✅ 如果传输到服务器，算 |

**您的情况：**
- 只用了chrome.storage.local
- 没有用cookie
- **不算收集数据**

---

### Q3: 我保存了语言偏好，这不算用户数据吗？

**A:** ❌ **不算收集！**

**Chrome的定义：**
- **收集（Collect）**：获取数据并传输到服务器
- **本地存储（Local Storage）**：仅保存在用户设备

**您的情况：**
- ✅ 语言偏好只保存在本地
- ✅ 从不离开用户设备
- ✅ 符合"不收集数据"的定义

---

### Q4: 如果Chrome问我详细说明怎么办？

**使用这个说明：**

```
This extension does not collect any user data.

The only data stored is the user's language preference (e.g., English, Chinese, Spanish), which is saved locally on the user's device using Chrome's storage API (chrome.storage.local). This preference never leaves the user's device and is not transmitted to any server.

All CAGR calculations are performed entirely on the user's device. No calculation data, input values, or results are collected, stored remotely, or transmitted.

The extension works completely offline and has no analytics, tracking, or data collection of any kind.
```

---

## 🔍 代码验证

### 您的扩展只做了这些：

**1. 保存语言偏好（本地）**
```javascript
chrome.storage.local.set({ preferredLanguage: selectedLang });
```
- ✅ 仅本地存储
- ✅ 不传输

**2. 读取语言偏好（本地）**
```javascript
chrome.storage.local.get(['preferredLanguage'], async (result) => {
  let lang = result.preferredLanguage || 'zh_CN';
});
```
- ✅ 从本地读取
- ✅ 不涉及网络

**3. 读取翻译文件（本地）**
```javascript
const response = await fetch(`../_locales/${lang}/messages.json`);
```
- ✅ 读取扩展包内文件
- ✅ 不是网络请求

**4. 计算CAGR（本地）**
- ✅ 所有计算在客户端
- ✅ 不发送到服务器

---

## ✅ 最终答案

### Data Usage填写：

```
What user data do you plan to collect?
答案：☐ 不勾选任何选项

Certifications:
✅ I do not sell or transfer user data to third parties
✅ I do not use or transfer user data for purposes unrelated to my item's single purpose
✅ I do not use or transfer user data to determine creditworthiness or for lending purposes

Privacy Policy URL:
https://cagrcalculator.app/en/privacy
```

---

## 🎯 总结

**您的扩展：**
- ✅ 不使用cookie
- ✅ 不收集用户数据
- ✅ 只在本地保存语言偏好
- ✅ 完全离线工作
- ✅ 符合隐私最佳实践

**应该填写：**
- ❌ 不勾选任何数据收集类型
- ✅ 勾选所有三项认证
- ✅ 填写隐私政策URL

---

创建日期：2025年10月26日
验证状态：✅ 代码已审查，确认不收集数据

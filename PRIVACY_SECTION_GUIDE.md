# Privacy Section 填写完整指南

## ✅ Permission Justification（权限说明）

### 1. Storage Justification

**已填写（正确）：**
```
Used to save user's language preference so it persists across sessions.
```

**说明：**
- 您的扩展使用 storage 权限
- 仅用于保存用户语言偏好
- 完全符合单一用途原则

---

### 2. Remote Code Question

**问题：** Are you using remote code?

**正确答案：**
```
⚪ Yes, I am using remote code  ← ❌ 不要选
🔵 No, I am not using remote code  ← ✅ 选这个！
```

**验证依据：**

检查了您的代码：
- ✅ manifest.json - 无远程权限
- ✅ popup.html - 所有script都是本地文件
- ✅ 没有CDN引用
- ✅ 没有外部API调用执行远程代码

**所有脚本：**
```
../lib/formatters.js  ← 本地
../lib/calculator.js  ← 本地
popup.js              ← 本地
```

---

## 📝 接下来需要填写的部分

### 1. Data Usage（数据使用）

**问题：** Does this item collect user data?

**答案：**
```
🔵 No, this item does not collect user data
```

**详细说明（会要求填写）：**
```
This extension does not collect, store, or transmit any user data. All calculations are performed locally on the user's device. The only data stored is the user's language preference, which is stored locally using Chrome's storage API and is never transmitted to any server.
```

---

### 2. Privacy Policy URL

**填写：**
```
https://cagrcalculator.app/en/privacy
```

**说明：**
- 这是您的官方隐私政策页面
- Chrome Web Store强制要求提供
- 确保URL可以正常访问

---

### 3. Single Purpose（单一用途）

**说明：**
```
This is a CAGR (Compound Annual Growth Rate) calculator that helps users calculate investment growth.
```

**中文版本（供参考）：**
```
这是一个CAGR（复合年增长率）计算器，帮助用户计算投资增长。
```

---

## 🚨 常见错误

### ❌ 错误1：选择了 "Yes, I am using remote code"
**后果：** 需要提供详细说明，审核会被延迟或拒绝

**正确做法：** 选择 "No"

---

### ❌ 错误2：选择了 "Yes, this item collects user data"
**后果：** 需要填写复杂的数据披露表格

**正确做法：** 选择 "No"，您的扩展不收集用户数据

---

### ❌ 错误3：隐私政策URL无效
**后果：** 提交会被拒绝

**正确做法：**
- 确保 https://cagrcalculator.app/en/privacy 可以访问
- 包含必要的隐私政策内容

---

## ✅ Privacy部分完整检查清单

```
Permission Justification:
✅ Storage justification: "Used to save user's language preference..."
✅ Remote code: "No, I am not using remote code"

Data Usage:
✅ Collect user data: "No"
✅ Explanation: "This extension does not collect, store, or transmit..."

Privacy Policy:
✅ URL: https://cagrcalculator.app/en/privacy

Single Purpose:
✅ Description: "This is a CAGR calculator that helps users..."
```

---

## 🎯 快速填写流程

1. **Storage justification** - 已完成 ✅
2. **Remote code** - 选择 "No" ⚠️
3. **Data collection** - 选择 "No"
4. **Privacy policy URL** - 填写URL
5. **Single purpose** - 填写说明
6. **保存** - Save draft
7. **继续** - 前往Distribution

---

创建日期：2025年10月26日
状态：完整指南

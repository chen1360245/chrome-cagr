# ⚠️ Chrome Web Store 正确上传步骤

## 🚨 常见错误

**错误：** 把截图上传到了 "Store icon" 位置
**结果：** 显示 "Error: The image size is incorrect"
**原因：** Store icon 要求 128x128，而截图是 1280x800

---

## ✅ 正确上传步骤

### 第一步：上传 Store Icon（商店图标）

**位置：** Graphic assets → Store icon
**要求：** 128x128 pixels
**文件：**
```
D:\program files\AIweb\chrome-cagr\icons\icon128.png
```

**操作：**
1. 在 "Store icon" 区域点击或拖拽
2. 选择文件：`icon128.png`（128x128）
3. 上传完成 ✅

---

### 第二步：向下滚动页面

**重要：不要在 Graphic assets 停留！**

继续向下滚动，直到看到以下区域之一：

---

### 第三步：上传截图到正确位置

#### 方式A：Global screenshots（推荐）⭐

**位置：** Global assets → Global screenshots

**标识特征：**
```
Global screenshots *
Up to a maximum of 5
1280x800 or 640x400
JPEG or 24-bit PNG (no alpha)
At least one is required

[Drop image here] ← 这里才是上传截图的地方！
```

**操作：**
1. 找到 "Global screenshots" 区域
2. **按顺序**拖拽或选择以下5张截图：
   ```
   01-calculation-results.png
   02-investment-insights.png
   03-main-interface.png
   04-smart-detection.png
   05-multilingual-chinese.png
   ```
3. 确保顺序正确（第1张最重要！）

---

#### 方式B：Localized screenshots（可选）

**位置：** Localized assets → Localized screenshots

**标识特征：**
```
Localized screenshots *
Up to a maximum of 5
1280x800 or 640x400
JPEG or 24-bit PNG (no alpha)
At least one is required

[Drop image here] ← 也可以在这里上传
```

**说明：**
- 如果使用 Localized screenshots，需要为每个语言分别上传
- 推荐使用 Global screenshots（更简单）

---

## 📊 区域对照表

| 区域名称 | 位置 | 尺寸要求 | 上传什么 | 文件路径 |
|---------|------|----------|----------|----------|
| **Store icon** | Graphic assets | 128x128 | 扩展图标 | `icons\icon128.png` |
| **Global screenshots** | Global assets | 1280x800 | 5张截图 | `store-screenshots\01-05.png` |
| **Localized screenshots** | Localized assets | 1280x800 | 5张截图 | `store-screenshots\01-05.png` |

---

## 🎯 完整上传清单

### 必须上传的内容

- [ ] **Store icon**（128x128）
  - 文件：`D:\program files\AIweb\chrome-cagr\icons\icon128.png`
  - 位置：Graphic assets → Store icon

- [ ] **截图1：计算结果**（1280x800）
  - 文件：`D:\program files\AIweb\chrome-cagr\store-screenshots\01-calculation-results.png`
  - 位置：Global screenshots（第1张）

- [ ] **截图2：投资洞察**（1280x800）
  - 文件：`D:\program files\AIweb\chrome-cagr\store-screenshots\02-investment-insights.png`
  - 位置：Global screenshots（第2张）

- [ ] **截图3：主界面**（1280x800）
  - 文件：`D:\program files\AIweb\chrome-cagr\store-screenshots\03-main-interface.png`
  - 位置：Global screenshots（第3张）

- [ ] **截图4：智能检测**（1280x800）
  - 文件：`D:\program files\AIweb\chrome-cagr\store-screenshots\04-smart-detection.png`
  - 位置：Global screenshots（第4张）

- [ ] **截图5：中文界面**（1280x800）
  - 文件：`D:\program files\AIweb\chrome-cagr\store-screenshots\05-multilingual-chinese.png`
  - 位置：Global screenshots（第5张）

---

## 🔍 如何识别正确的上传区域

### ❌ 错误区域（不要在这里上传截图）

```
Graphic assets
└── Store icon *
    128x128 pixels  ← 注意：128x128，这是图标，不是截图！
    Please ensure icon follows
    image guidelines

    [Drop icon here] ← ❌ 不要把截图上传到这里！
```

### ✅ 正确区域（在这里上传截图）

```
Global assets
└── Global screenshots *
    Up to a maximum of 5
    1280x800 or 640x400  ← 注意：1280x800，这才是截图！
    JPEG or 24-bit PNG (no alpha)
    At least one is required

    [Drop image here] ← ✅ 在这里上传截图！
```

---

## 🚨 常见问题解决

### 问题1：上传截图显示 "image size is incorrect"

**原因：** 您把截图上传到了 Store icon 位置
**解决：**
1. 关闭错误提示
2. 向下滚动页面
3. 找到 "Global screenshots" 区域
4. 在那里上传截图

### 问题2：找不到 "Global screenshots"

**解决：**
1. 确保您在扩展的编辑页面
2. 向下滚动页面（可能在页面下方）
3. 查看左侧导航栏是否有 "Store listing" 选项
4. 如果找不到，尝试保存当前更改后刷新页面

### 问题3：上传顺序错误

**解决：**
- Chrome Web Store 会按照您上传的顺序显示截图
- 如果顺序错误，可以删除后重新按正确顺序上传
- 确保第1张是 `01-calculation-results.png`（最重要！）

---

## ✅ 上传成功的标志

上传成功后，您应该看到：

1. **Store icon 区域：**
   - 显示您的扩展图标（128x128）
   - 无错误提示

2. **Global screenshots 区域：**
   - 显示5张截图缩略图
   - 截图按顺序排列
   - 无错误提示

3. **页面状态：**
   - 可以保存更改
   - 没有红色错误提示

---

## 📸 文件准备情况

### ✅ 所有文件都已准备好

**Store Icon（已准备）：**
```
D:\program files\AIweb\chrome-cagr\icons\icon128.png
├── 尺寸：128x128 ✅
├── 格式：RGB PNG ✅
└── 大小：合适 ✅
```

**Screenshots（已准备）：**
```
D:\program files\AIweb\chrome-cagr\store-screenshots\
├── 01-calculation-results.png   (1280x800, RGB PNG) ✅
├── 02-investment-insights.png   (1280x800, RGB PNG) ✅
├── 03-main-interface.png        (1280x800, RGB PNG) ✅
├── 04-smart-detection.png       (1280x800, RGB PNG) ✅
└── 05-multilingual-chinese.png  (1280x800, RGB PNG) ✅
```

---

## 🎯 快速上传流程（5分钟）

1. **上传 Store Icon**（30秒）
   - 位置：Graphic assets → Store icon
   - 文件：`icons\icon128.png`

2. **向下滚动**（5秒）
   - 找到 Global screenshots 区域

3. **上传5张截图**（3分钟）
   - 按01→05顺序上传
   - 拖拽或点击选择文件

4. **检查预览**（1分钟）
   - 确认所有图片正确
   - 确认顺序正确

5. **保存更改**（30秒）
   - 点击保存按钮
   - 等待确认

**完成！** 🎉

---

**文档创建日期：** 2025年10月26日
**状态：** ✅ 所有文件已准备就绪
**下一步：** 按照本指南上传到正确位置

---

*清晰明确，避免错误，一次上传成功！* 💪

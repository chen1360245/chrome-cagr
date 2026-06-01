# 📦 Chrome扩展打包指南

**文件名：** smart-cagr-calculator.zip
**当前版本：** 1.0.0
**包大小：** ~27KB
**最后更新：** 2025年10月25日

---

## 🎯 快速打包（推荐）

### 方法1：使用PowerShell脚本（最简单）

**适用于：** Windows系统

#### 步骤1：打开PowerShell

**方式A：在项目文件夹中打开**
1. 打开克隆后的仓库根目录：`chrome-cagr`
2. 按住 **Shift** 键，右键点击空白处
3. 选择"在此处打开 PowerShell 窗口"

**方式B：通过命令打开**
1. 按 **Win + X**，选择"Windows PowerShell"
2. 输入命令切换到项目目录：
   ```powershell
   cd chrome-cagr
   ```

#### 步骤2：运行打包脚本

```powershell
.\create-zip.ps1
```

#### 步骤3：查看结果

脚本会自动：
- ✅ 删除旧的ZIP包（如果存在）
- ✅ 创建临时文件夹
- ✅ 复制所有必需文件
- ✅ 自动排除.md文档文件
- ✅ 生成新的ZIP包
- ✅ 清理临时文件
- ✅ 显示ZIP内容和大小

**成功提示：**
```
✅ ZIP包创建成功: smart-cagr-calculator.zip
📏 文件大小: 27.xx KB
```

#### 如果遇到"无法运行脚本"错误

**错误信息：**
```
无法加载文件 create-zip.ps1，因为在此系统上禁止运行脚本。
```

**解决方案：**
```powershell
# 临时允许脚本执行（仅当前PowerShell窗口）
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# 然后再运行打包脚本
.\create-zip.ps1
```

---

### 方法2：手动创建ZIP（通用方法）

**适用于：** 所有系统（Windows、Mac、Linux）

#### 步骤1：创建临时文件夹

在项目根目录创建一个临时文件夹：
```
新建文件夹：temp_package
```

#### 步骤2：复制必需文件

**将以下文件/文件夹复制到 temp_package：**

```
✅ manifest.json          （扩展配置文件）
✅ logo-full.svg           （Logo图标）
✅ _locales/               （整个文件夹 - 9种语言）
✅ popup/                  （整个文件夹 - 3个文件）
✅ lib/                    （整个文件夹 - 2个文件）
✅ icons/                  （只复制以下4个图标文件）
    ├── icon.svg
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

**不要复制：**
```
❌ 所有 .md 文档文件
❌ cagr-chrome/ 文件夹（如果存在）
❌ create-zip.ps1
❌ generate_icons.py
❌ 其他Python脚本
❌ README.md, QUICK_START.md 等文档
```

#### 步骤3：删除文档文件

在 temp_package 文件夹中：
1. 搜索所有 `.md` 文件
2. 全部删除
3. 确保只保留代码和资源文件

#### 步骤4：创建ZIP

**Windows：**
1. 进入 `temp_package` 文件夹
2. 选中**文件夹内的所有内容**（Ctrl+A）
3. 右键 → 发送到 → 压缩(ZIP)文件夹
4. 重命名为：`smart-cagr-calculator.zip`
5. 将ZIP移到项目根目录

**Mac：**
1. 进入 `temp_package` 文件夹
2. 选中所有内容（Cmd+A）
3. 右键 → 压缩
4. 重命名为：`smart-cagr-calculator.zip`
5. 将ZIP移到项目根目录

**Linux：**
```bash
cd temp_package
zip -r ../smart-cagr-calculator.zip *
```

#### 步骤5：清理临时文件夹

删除 `temp_package` 文件夹

---

## 📋 ZIP包内容清单

打包后的ZIP应该包含以下结构：

```
smart-cagr-calculator.zip
├── manifest.json                    ← 扩展配置（必需）
├── logo-full.svg                    ← Logo图标（必需）
│
├── _locales/                        ← 多语言翻译（必需）
│   ├── ar/
│   │   └── messages.json           ← 阿拉伯语
│   ├── de/
│   │   └── messages.json           ← 德语
│   ├── en/
│   │   └── messages.json           ← 英语（默认）
│   ├── es/
│   │   └── messages.json           ← 西班牙语
│   ├── fr/
│   │   └── messages.json           ← 法语
│   ├── ja/
│   │   └── messages.json           ← 日语
│   ├── ko/
│   │   └── messages.json           ← 韩语
│   ├── pt_BR/
│   │   └── messages.json           ← 葡萄牙语
│   └── zh_CN/
│       └── messages.json           ← 简体中文
│
├── popup/                           ← 弹窗界面（必需）
│   ├── popup.html                  ← HTML结构
│   ├── popup.js                    ← JavaScript逻辑
│   └── popup.css                   ← CSS样式（已优化布局）
│
├── lib/                             ← 核心库（必需）
│   ├── calculator.js               ← CAGR计算逻辑
│   └── formatters.js               ← 格式化工具
│
└── icons/                           ← 扩展图标（必需）
    ├── icon.svg                    ← SVG矢量图标
    ├── icon16.png                  ← 16x16 PNG图标
    ├── icon48.png                  ← 48x48 PNG图标
    └── icon128.png                 ← 128x128 PNG图标
```

**统计信息：**
- 总文件数：约 22-25 个文件
- 总大小：约 27KB
- 9种语言支持
- 4个图标文件

---

## ✅ 打包前检查清单

### 必须包含的文件 ✅

- [ ] **manifest.json** - 扩展配置文件
- [ ] **logo-full.svg** - Logo图标
- [ ] **_locales/** - 所有9种语言的翻译文件
  - [ ] ar/messages.json（阿拉伯语）
  - [ ] de/messages.json（德语）
  - [ ] en/messages.json（英语）
  - [ ] es/messages.json（西班牙语）
  - [ ] fr/messages.json（法语）
  - [ ] ja/messages.json（日语）
  - [ ] ko/messages.json（韩语）
  - [ ] pt_BR/messages.json（葡萄牙语）
  - [ ] zh_CN/messages.json（简体中文）
- [ ] **popup/** - 所有3个popup文件
  - [ ] popup.html
  - [ ] popup.js
  - [ ] popup.css（包含布局优化）
- [ ] **lib/** - 所有2个库文件
  - [ ] calculator.js
  - [ ] formatters.js
- [ ] **icons/** - 所有4个图标文件
  - [ ] icon.svg
  - [ ] icon16.png
  - [ ] icon48.png
  - [ ] icon128.png

### 不应包含的文件 ❌

- [ ] ❌ 所有 .md 文档文件
- [ ] ❌ README.md
- [ ] ❌ QUICK_START.md
- [ ] ❌ SCREENSHOT_GUIDE.md
- [ ] ❌ SUBMISSION_GUIDE.md
- [ ] ❌ PACKAGE_GUIDE.md
- [ ] ❌ 其他所有文档文件
- [ ] ❌ create-zip.ps1（打包脚本）
- [ ] ❌ generate_icons.py（图标生成脚本）
- [ ] ❌ cagr-chrome/ 文件夹（如果存在）

### 验证步骤

#### 1. ZIP大小检查
- ✅ 应该在 **25-30KB** 之间
- ⚠️ 如果超过 100KB，可能包含了不必要的文件
- ⚠️ 如果小于 20KB，可能缺少必需文件

#### 2. 内容检查
- 解压ZIP到临时文件夹
- 确认**没有 .md 文件**
- 确认 manifest.json **在根目录**
- 确认文件夹结构正确

#### 3. 结构检查

**正确结构：** ✅
```
smart-cagr-calculator.zip
├── manifest.json      ← 直接在根目录
├── logo-full.svg
├── _locales/
├── popup/
├── lib/
└── icons/
```

**错误结构：** ❌
```
smart-cagr-calculator.zip
└── cagr-chrome/       ← 不应该有这一层外层文件夹
    ├── manifest.json
    ├── logo-full.svg
    └── ...
```

**如何避免错误结构：**
- 压缩时选择**文件夹内的内容**，不是文件夹本身
- 进入temp_package文件夹内部，选中所有文件再压缩

---

## 🧪 打包后本地测试

**在上传到Chrome Web Store之前，务必本地测试ZIP包！**

### 步骤1：打开Chrome扩展页面

在Chrome浏览器地址栏输入：
```
chrome://extensions/
```

### 步骤2：开启开发者模式

右上角打开"开发者模式"开关

### 步骤3：解压ZIP到测试文件夹

1. 创建测试文件夹：`test_extension`
2. 解压 `smart-cagr-calculator.zip` 到此文件夹

### 步骤4：加载扩展

1. 点击"加载已解压的扩展程序"
2. 选择 `test_extension` 文件夹

### 步骤5：功能测试

**必测功能清单：**

- [ ] 扩展能否正常加载
- [ ] 点击扩展图标，弹窗是否显示
- [ ] **界面布局检查：**
  - [ ] 所有4个输入字段在一屏内可见
  - [ ] "立即计算"按钮直接可见
  - [ ] **没有垂直滚动条**（输入区域）
- [ ] **多语言测试：**
  - [ ] 切换到"简体中文"是否正常
  - [ ] 切换到"English"是否正常
  - [ ] 切换到其他语言是否正常
- [ ] **计算功能测试：**
  - [ ] 输入：PV=100, FV=200, n=5
  - [ ] 计算结果是否正确
  - [ ] 结果说明是否翻译正确
- [ ] **界面显示：**
  - [ ] 中文界面括号显示正常（不是◆◆）
  - [ ] 解释文本数字替换正常（不是_PV_等占位符）

### 步骤6：检查控制台

1. 右键点击扩展图标
2. 选择"检查弹出内容"
3. 查看Console标签
4. **确保无错误信息**

**如果有错误：**
- 记录错误信息
- 检查对应文件
- 修复后重新打包

---

## ⚠️ 常见打包错误

### 错误1：ZIP结构不正确

**症状：**
```
Could not load manifest
Failed to load extension
```

**原因：**
- manifest.json 不在ZIP根目录
- 压缩时包含了外层文件夹

**解决：**
1. 进入 temp_package 文件夹内部
2. 选中文件夹内的内容（不是文件夹本身）
3. 压缩选中的内容

**验证：**
解压ZIP，第一层应该直接看到 manifest.json

---

### 错误2：文件缺失

**症状：**
```
Could not load icon 'icons/icon16.png'
Could not load file 'popup/popup.html'
```

**原因：**
- 缺少必需的图标文件或代码文件

**解决：**
1. 检查 icons 文件夹
2. 确保所有PNG图标都已打包
3. 确保 popup、lib 文件夹完整

**验证：**
对照"ZIP包内容清单"逐一检查

---

### 错误3：ZIP太大

**症状：**
- ZIP文件超过 100KB
- 上传缓慢或失败

**原因：**
- 包含了不必要的文件（文档、脚本等）

**解决：**
1. 使用 `create-zip.ps1` 脚本（自动排除）
2. 或手动删除所有 .md 文件
3. 删除 Python 脚本
4. 删除其他非必需文件

**验证：**
ZIP文件大小应该在 25-30KB 之间

---

### 错误4：manifest.json 格式错误

**症状：**
```
Failed to parse manifest
Manifest is not valid JSON
```

**原因：**
- JSON 格式错误
- 缺少逗号、括号等

**解决：**
1. 使用JSON验证工具：https://jsonlint.com/
2. 复制 manifest.json 内容粘贴验证
3. 修复错误
4. 重新打包

---

### 错误5：翻译文件格式错误

**症状：**
```
Variable $1$ used but not defined
无法加载清单
```

**原因：**
- messages.json 中使用了不支持的占位符格式

**解决：**
我们已经修复了这个问题，使用 `_PV_`, `_FV_`, `_N_`, `_R_` 占位符

**验证：**
检查所有9个语言的 messages.json，确保使用正确的占位符格式

---

## 🔄 重新打包（更新版本）

### 何时需要重新打包？

**必须重新打包的情况：**
- ✅ 修改了任何代码文件
- ✅ 更新了翻译文本
- ✅ 修改了 manifest.json
- ✅ 更新了图标
- ✅ 修复了Bug
- ✅ 添加了新功能

### 重新打包步骤

#### 步骤1：删除旧ZIP

```
删除文件：smart-cagr-calculator.zip
```

#### 步骤2：更新版本号（如果需要）

打开 `manifest.json`，修改版本号：

```json
{
  "version": "1.0.0"   ← 当前版本
}
```

**版本号规则（语义化版本）：**
```
主版本.次版本.修订版本

示例：
1.0.0 → 1.0.1  （Bug修复）
1.0.1 → 1.1.0  （新增功能）
1.1.0 → 2.0.0  （重大变更）
```

#### 步骤3：重新运行打包脚本

```powershell
.\create-zip.ps1
```

或手动打包（参考方法2）

#### 步骤4：验证新ZIP

- 检查文件大小（25-30KB）
- 解压验证内容
- 本地测试加载扩展

#### 步骤5：上传到Chrome Web Store

如果是更新版本：
1. 登录开发者控制台
2. 选择现有项目
3. 点击"Upload Updated Package"
4. 上传新ZIP

---

## 📤 上传到Chrome Web Store

### 上传步骤

#### 1. 登录开发者控制台

访问：https://chrome.google.com/webstore/devconsole

#### 2. 创建新项目或更新现有项目

**新项目：**
- 点击"New Item"
- 选择上传ZIP

**更新版本：**
- 选择现有项目
- 点击"Upload Updated Package"

#### 3. 上传ZIP

- 选择 `smart-cagr-calculator.zip`
- 等待验证通过（通常几秒钟）

#### 4. 处理验证错误（如果有）

- 阅读错误信息
- 参考"常见打包错误"部分
- 修复问题后重新打包
- 再次上传

#### 5. 填写商店信息

参考 `SUBMISSION_GUIDE.md` 完成剩余步骤

---

## 📊 版本管理

### 版本号规则

遵循**语义化版本（Semantic Versioning）**：

```
主版本.次版本.修订版本
MAJOR.MINOR.PATCH
```

### 何时更新版本号

| 变更类型 | 版本号示例 | 说明 |
|----------|-----------|------|
| Bug修复 | 1.0.0 → 1.0.1 | 修复小错误，不影响功能 |
| 新增功能 | 1.0.1 → 1.1.0 | 添加新功能，向后兼容 |
| 重大变更 | 1.1.0 → 2.0.0 | 不兼容的API变更 |

### 当前版本历史

| 版本 | 日期 | 变更内容 |
|------|------|---------|
| 1.0.0 | 2025-10-25 | 首次发布版本 |
| | | - 4参数CAGR计算 |
| | | - 9种语言支持 |
| | | - 智能模式检测 |
| | | - 布局优化（无滚动条） |
| | | - 投资洞察功能 |

---

## 🛠️ 打包脚本说明

### create-zip.ps1 脚本功能

**文件位置：**
```
chrome-cagr\create-zip.ps1
```

**自动化操作：**
1. ✅ 删除旧的ZIP包（避免冲突）
2. ✅ 创建临时文件夹 temp_zip
3. ✅ 复制必需文件：
   - manifest.json
   - logo-full.svg
   - _locales/ 文件夹
   - popup/ 文件夹
   - lib/ 文件夹
   - icons/ 文件夹（只复制图标文件）
4. ✅ 自动删除所有 .md 文档文件
5. ✅ 创建 ZIP 包
6. ✅ 清理临时文件夹
7. ✅ 显示ZIP内容列表
8. ✅ 显示文件大小

**脚本内容（供参考）：**
```powershell
# 创建干净的Chrome扩展ZIP包
# 排除不必要的文档文件

$ErrorActionPreference = "Stop"

# 切换到项目目录
Set-Location "chrome-cagr"

# 删除旧的ZIP（如果存在）
if (Test-Path "smart-cagr-calculator.zip") {
    Remove-Item "smart-cagr-calculator.zip" -Force
}

# 创建临时文件夹并复制文件
# ... （自动处理）

# 创建ZIP
Compress-Archive -Path "$tempFolder\*" -DestinationPath "smart-cagr-calculator.zip" -Force

# 显示结果
Write-Host "✅ ZIP包创建成功: smart-cagr-calculator.zip" -ForegroundColor Green
```

**运行命令：**
```powershell
.\create-zip.ps1
```

---

## 📝 打包日志

### 当前版本信息

**版本：** 1.0.0
**日期：** 2025年10月25日
**大小：** ~27KB
**状态：** ✅ 已创建，待上传

### 包含的功能

- ✅ 4参数CAGR计算（PV, FV, N, CAGR）
- ✅ 9种语言支持（en, zh_CN, es, de, ja, fr, pt_BR, ko, ar）
- ✅ 智能模式检测（自动识别计算模式）
- ✅ 投资洞察（市场对比、时间分析）
- ✅ 实时输入验证
- ✅ 离线使用（无需网络）
- ✅ 布局优化（无滚动条，一屏显示）
- ✅ 响应式设计
- ✅ 深浅色主题支持

### 技术特性

- ✅ Manifest V3（最新规范）
- ✅ 纯JavaScript实现
- ✅ Chrome Storage API（保存语言偏好）
- ✅ 自定义i18n系统（动态语言切换）
- ✅ 无外部依赖
- ✅ 隐私友好（不收集数据）

---

## 🔐 安全检查

### 打包前安全检查清单

- [ ] 代码中无敏感信息
- [ ] 无硬编码的API密钥
- [ ] 无个人信息
- [ ] 无调试代码（console.log已移除或注释）
- [ ] 无测试数据
- [ ] 隐私政策URL正确（https://cagrcalculator.app/en/privacy-extension）

### 权限检查

**manifest.json 中声明的权限：**
```json
{
  "permissions": ["storage"]
}
```

**权限说明：**
- `storage` - 用于保存用户的语言偏好设置
- **不收集** 任何计算数据
- **不访问** 用户浏览历史
- **不访问** 网页内容

---

## ✅ 最终确认清单

### 上传前最后检查

#### 1. ZIP文件确认
- [ ] 文件名：`smart-cagr-calculator.zip`
- [ ] 大小：25-30KB之间
- [ ] 位置：项目根目录

#### 2. 内容确认
- [ ] manifest.json 在根目录
- [ ] 所有必需文件都包含（参考清单）
- [ ] 无不必要的文件（.md文档等）
- [ ] 文件夹结构正确

#### 3. 功能确认
- [ ] 本地测试通过
- [ ] 所有语言正常工作
- [ ] 计算功能正确
- [ ] 布局显示正常（无滚动条）
- [ ] 无控制台错误

#### 4. 版本确认
- [ ] manifest.json 版本号正确
- [ ] 与之前版本不重复（如果是更新）

#### 5. 隐私政策确认
- [ ] https://cagrcalculator.app/en/privacy-extension 可访问
- [ ] 包含所有必需内容

**✅ 所有检查通过 → 可以上传到Chrome Web Store！**

---

## 📞 故障排除

### 遇到问题？

#### 1. 脚本运行失败
**检查：**
- PowerShell是否在正确的目录
- 执行策略是否允许（使用Bypass）
- create-zip.ps1 文件是否存在

#### 2. ZIP包太大或太小
**检查：**
- 是否包含了不必要的文件
- 是否缺少必需文件
- 对照清单逐一检查

#### 3. 扩展加载失败
**检查：**
- ZIP结构是否正确
- manifest.json 是否在根目录
- manifest.json 格式是否正确

#### 4. 功能测试失败
**检查：**
- 是否打包了最新代码
- 是否有控制台错误
- 是否缺少某些文件

### 仍有问题？

**参考文档：**
- Chrome扩展开发文档：https://developer.chrome.com/docs/extensions/
- Chrome Web Store发布指南：https://developer.chrome.com/docs/webstore/

**检查本指南的：**
- 常见打包错误部分
- ZIP包内容清单
- 打包前检查清单

---

## 🎯 快速参考

### 完整打包流程（1分钟）

```powershell
# 步骤1：进入项目目录
cd chrome-cagr

# 步骤2：运行打包脚本
.\create-zip.ps1

# 步骤3：验证结果
# 查看输出信息：
# ✅ ZIP包创建成功: smart-cagr-calculator.zip
# 📏 文件大小: ~27 KB

# 完成！ZIP包已创建在项目根目录
```

### 打包命令速查

```powershell
# 允许脚本执行（如果需要）
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# 运行打包脚本
.\create-zip.ps1

# 检查文件是否存在
Test-Path "smart-cagr-calculator.zip"

# 查看文件大小
(Get-Item "smart-cagr-calculator.zip").Length / 1KB
```

---

## 📚 相关文档

| 文档 | 用途 | 位置 |
|------|------|------|
| PACKAGE_GUIDE.md | 打包完整指南 | 本文档 |
| SUBMISSION_GUIDE.md | 提交到Chrome Web Store | 项目根目录 |
| SCREENSHOT_GUIDE.md | 截图制作指南 | 项目根目录 |
| STORE_DESCRIPTION.md | 商店描述文本 | 项目根目录 |

---

## 📈 版本更新历史

| 文档版本 | 日期 | 变更内容 |
|----------|------|---------|
| 2.0 | 2025-10-25 | 重新创建完整版本 |
| | | - 添加详细的打包步骤 |
| | | - 添加常见错误解决方案 |
| | | - 添加安全检查清单 |
| | | - 更新隐私政策URL |
| | | - 添加布局优化说明 |
| 1.0 | 2025-10-25 | 初始版本 |

---

**创建时间：** 2025年10月25日
**适用版本：** 1.0.0+
**下次更新：** 需要时

---

*为全球投资者倾情打造 ❤️*
*由 cagrcalculator.app 提供支持*

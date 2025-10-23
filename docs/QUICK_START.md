# 🚀 快速开始：创建新的i18n开发分支

## 📍 你的当前状态
- ✅ 已在main分支
- ✅ i18n-dev已成功合并到main
- ✅ 网站已部署
- 🎯 需要继续开发多语言功能

---

## 🎯 推荐方案：创建新分支（而不是继续使用i18n-dev）

### 为什么创建新分支？
- ✅ **保护生产环境** - main分支已部署，需要保持稳定
- ✅ **清晰的历史记录** - 每个功能独立管理
- ✅ **灵活的发布控制** - 可以选择何时合并
- ✅ **专业的工作流** - 符合Git最佳实践

---

## 📝 在GitHub Desktop中的操作步骤

### 第1步：确保main分支是最新的 ✅
```
你已经在main分支上了，跳过此步骤
```

### 第2步：创建新分支 🆕

#### 图形界面操作：
1. **点击顶部** `Current branch` **下拉菜单**

2. **点击** `New Branch` **按钮**

3. **填写分支信息**：
   - Branch name: `i18n-expansion`
   - （或者：`i18n/add-languages`）
   - Create from: `main` ✅（确保选中）

4. **点击** `Create Branch`

5. **发布到远程**：
   - 会自动提示："This branch does not exist on the remote"
   - 点击 `Publish branch` 按钮

### 第3步：开始开发 🎨
```
现在你在新分支 i18n-expansion 上
所有更改不会影响main分支和已部署的网站
可以安全地开发了！
```

---

## 🌟 分支命名建议

根据你的开发内容选择：

| 如果你要开发... | 推荐分支名 |
|----------------|-----------|
| 添加多个新语言 | `i18n-expansion` ⭐ |
| 只添加日语 | `i18n/japanese` |
| 只添加法语 | `i18n/french` |
| RTL语言支持 | `i18n/rtl-support` |
| 优化性能 | `refactor/i18n-perf` |

---

## 🔄 日常开发流程

### 每次开发时：
```
1. 打开GitHub Desktop
2. 确认当前在 i18n-expansion 分支
3. 点击 "Fetch origin" 获取更新
4. 开始编码
```

### 提交更改时：
```
1. 在左下角填写commit信息：
   Summary: 简短描述（如："feat: Add Japanese translations"）
   Description:（可选）详细说明
2. 点击 "Commit to i18n-expansion"
3. 点击 "Push origin" 推送到GitHub
```

### 功能完成时：
```
1. Branch → Create Pull Request
2. 在GitHub网页上填写PR描述
3. 合并到main
4. 切换回main分支
5. Pull最新代码
```

---

## ⚠️ 关于i18n-dev分支的处理

### 可以保留i18n-dev分支
```bash
# 它已经完成使命，可以保留作为历史记录
# 不需要删除
```

### 如果想删除（可选）
```bash
# 在GitHub Desktop中：
1. 右键点击 i18n-dev 分支
2. 选择 "Delete..."
3. 确认删除本地分支
4. 勾选 "Delete this branch on the remote"
5. 点击 "Delete"
```

### 推荐：暂时保留
```
建议先保留i18n-dev分支
等新分支稳定后再考虑删除
```

---

## 📊 对比表：两种选择

| 对比项 | 继续用i18n-dev | 创建新分支 i18n-expansion |
|-------|---------------|------------------------|
| 操作难度 | ⭐⭐⭐⭐⭐ 简单 | ⭐⭐⭐⭐ 稍复杂 |
| 历史清晰度 | ⭐⭐ 混乱 | ⭐⭐⭐⭐⭐ 清晰 |
| 专业程度 | ⭐⭐⭐ 一般 | ⭐⭐⭐⭐⭐ 专业 |
| 风险控制 | ⭐⭐⭐ 中等 | ⭐⭐⭐⭐⭐ 最佳 |
| 适合场景 | 个人小项目 | **生产环境** ✅ |

---

## 🎯 最终建议

**对于你的情况（网站已部署），强烈推荐：**

> ### 创建新分支 `i18n-expansion` ⭐⭐⭐⭐⭐

**立即执行**：
```
1. 在GitHub Desktop中
2. Current branch → New Branch
3. 命名为：i18n-expansion
4. Create from: main
5. Publish branch
6. 开始开发！
```

---

## 📚 更多信息

详细的分支策略和Git工作流，请查看：
- 📖 `docs/git-branch-strategy.md` - 完整的分支管理指南
- 📖 `docs/github-desktop-merge-tutorial.md` - 合并教程

---

## ❓ 快速答疑

**Q: 为什么不继续用i18n-dev？**
A: 因为网站已部署，需要更严格的版本控制。新分支可以让你安全地开发，不影响生产环境。

**Q: 如果我已经在i18n-dev上改了代码怎么办？**
A: 没关系，可以先提交到i18n-dev，然后从i18n-dev创建新分支，或者使用`git cherry-pick`转移提交。

**Q: 新分支从main创建，会包含之前的i18n代码吗？**
A: 会的！因为i18n-dev已经合并到main了，所以从main创建的新分支会包含所有已合并的代码。

**Q: 多个语言需要创建多个分支吗？**
A: 看情况。如果同时开发多个语言，用一个`i18n-expansion`分支即可。如果是逐个添加，可以每个语言一个分支。

---

*祝开发顺利！🚀*
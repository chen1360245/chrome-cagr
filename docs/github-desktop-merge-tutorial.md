# GitHub Desktop分支合并教程

## 📚 目录
- [概述](#概述)
- [方法一：通过Pull Request合并（推荐）](#方法一通过pull-request合并推荐)
- [方法二：直接合并分支（快速）](#方法二直接合并分支快速)
- [方法三：命令行合并（高级）](#方法三命令行合并高级)
- [常见问题解决](#常见问题解决)
- [最佳实践](#最佳实践)

---

## 概述

在GitHub Desktop中将分支合并到main有多种方法。本教程将详细介绍每种方法的步骤、优缺点和适用场景。

**当前状态分析**：
- 当前分支：`i18n-dev`
- 目标分支：`main`
- 有未提交的更改：`PR_TEMPLATE.md`

---

## 方法一：通过Pull Request合并（推荐）

这是最安全和规范的方式，特别适合团队协作。

### 步骤详解

#### 1️⃣ 提交当前更改
```
1. 在GitHub Desktop左下角，填写commit信息
   - Summary: "Add PR template"（简短描述）
   - Description:（可选的详细描述）
2. 点击 "Commit to i18n-dev" 按钮
```

#### 2️⃣ 推送到远程仓库
```
1. 点击顶部的 "Push origin" 按钮
   或使用快捷键：Ctrl+P（Windows）/ Cmd+P（Mac）
2. 等待推送完成
```

#### 3️⃣ 创建Pull Request
```
方式A：在GitHub Desktop中创建
1. 点击菜单栏 Branch → Create Pull Request
2. 将自动跳转到浏览器中的GitHub页面

方式B：使用顶部快捷按钮
1. 点击 "Create Pull Request" 按钮（如果显示）
2. 将打开浏览器
```

#### 4️⃣ 在GitHub网页上完成PR
```
1. 在打开的网页中：
   - Base: main
   - Compare: i18n-dev
2. 填写PR信息：
   - Title: 分支合并的标题
   - Description: 详细描述更改内容
3. 点击 "Create pull request"
```

#### 5️⃣ 合并Pull Request
```
1. 等待检查通过（如果有CI/CD）
2. 点击 "Merge pull request"
3. 确认合并：点击 "Confirm merge"
4. （可选）删除源分支
```

#### 6️⃣ 在GitHub Desktop同步
```
1. 切换到main分支：
   - 点击 "Current branch" 下拉菜单
   - 选择 "main"
2. 点击 "Fetch origin" 获取最新更改
3. 如果有更新，点击 "Pull origin"
```

### ✅ 优点
- 有完整的代码审查流程
- 保留详细的合并历史
- 可以运行自动化测试
- 团队成员可以review

### ⚠️ 缺点
- 步骤较多
- 需要网络连接

---

## 方法二：直接合并分支（快速）

适用于个人项目或紧急修复。

### 步骤详解

#### 1️⃣ 确保分支是最新的
```
1. 当前在 i18n-dev 分支
2. 点击 "Fetch origin" 同步远程更改
3. 如有更新，点击 "Pull origin"
```

#### 2️⃣ 提交所有更改
```
1. 查看 Changes 标签页
2. 确认所有需要的文件都已勾选
3. 填写commit信息并提交
4. Push到远程仓库
```

#### 3️⃣ 切换到main分支
```
1. 点击顶部 "Current branch" 下拉菜单
2. 在列表中选择 "main"
3. 等待分支切换完成
```

#### 4️⃣ 更新main分支
```
1. 点击 "Fetch origin"
2. 如果有更新，点击 "Pull origin"
3. 确保main是最新的
```

#### 5️⃣ 合并分支
```
方式A：通过菜单
1. 点击菜单栏 Branch → Merge into current branch
2. 在弹出窗口中选择 "i18n-dev"
3. 点击 "Merge i18n-dev into main"

方式B：通过分支列表
1. 在分支下拉列表中
2. 找到 i18n-dev 分支
3. 点击右侧的 "Merge into main" 按钮
```

#### 6️⃣ 解决冲突（如果有）
```
如果出现冲突：
1. GitHub Desktop会显示冲突文件
2. 点击 "Open in Visual Studio Code"（或其他编辑器）
3. 手动解决冲突：
   - 查找 <<<<<<< HEAD 标记
   - 选择保留的代码
   - 删除冲突标记
4. 保存文件
5. 回到GitHub Desktop
6. 点击 "Continue merge"
```

#### 7️⃣ 推送合并结果
```
1. 合并完成后，会有新的commit
2. 点击 "Push origin" 推送到远程main分支
```

### ✅ 优点
- 操作快速直接
- 不需要创建PR
- 适合简单的合并

### ⚠️ 缺点
- 没有code review
- 可能跳过测试
- 历史记录较简单

---

## 方法三：命令行合并（高级）

在GitHub Desktop中使用命令行进行精确控制。

### 打开命令行
```
在GitHub Desktop中：
- Windows: Repository → Open in Command Prompt
- Mac: Repository → Open in Terminal
```

### 执行合并命令

#### 标准合并
```bash
# 1. 切换到main分支
git checkout main

# 2. 更新main分支
git pull origin main

# 3. 合并i18n-dev分支
git merge i18n-dev

# 4. 推送到远程
git push origin main
```

#### 压缩合并（Squash Merge）
```bash
# 将所有commits压缩成一个
git checkout main
git merge --squash i18n-dev
git commit -m "Merge i18n-dev: Complete internationalization implementation"
git push origin main
```

#### 变基合并（Rebase）
```bash
# 保持线性历史
git checkout i18n-dev
git rebase main
git checkout main
git merge i18n-dev --ff-only
git push origin main
```

---

## 常见问题解决

### 问题1：无法推送（Push被拒绝）
```
错误信息：rejected - non-fast-forward

解决方案：
1. 先拉取最新更改：git pull origin main
2. 解决可能的冲突
3. 重新推送
```

### 问题2：合并冲突
```
症状：Merge conflicts detected

解决步骤：
1. 打开冲突文件
2. 查找冲突标记：
   <<<<<<< HEAD
   你的代码
   =======
   他们的代码
   >>>>>>> branch-name
3. 手动选择要保留的代码
4. 删除所有冲突标记
5. 保存文件
6. 在GitHub Desktop中继续合并
```

### 问题3：不小心合并错了
```
撤销合并（合并后还未推送）：
1. 在History中找到合并前的commit
2. 右键选择 "Revert this Commit"
或使用命令：
git reset --hard HEAD~1

撤销已推送的合并：
git revert -m 1 <merge-commit-hash>
git push origin main
```

### 问题4：分支落后于main
```
更新分支：
1. 切换到i18n-dev分支
2. Branch → Update from main
或命令：
git checkout i18n-dev
git merge main
```

---

## 最佳实践

### ✅ 合并前检查清单
- [ ] 所有更改已提交
- [ ] 分支已推送到远程
- [ ] 拉取了最新的main分支
- [ ] 运行了本地测试
- [ ] 代码已经过review（如果需要）

### 🎯 选择合适的合并方法

| 场景 | 推荐方法 | 原因 |
|------|---------|------|
| 团队协作项目 | Pull Request | 需要code review和讨论 |
| 个人项目小改动 | 直接合并 | 快速简单 |
| 功能分支完成 | Pull Request | 保留完整历史 |
| 紧急修复 | 直接合并 | 速度优先 |
| 需要清理历史 | Squash合并 | 保持主分支整洁 |

### 📝 Commit信息规范
```
类型: 简短描述

详细说明（可选）

相关issue: #123
```

类型示例：
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建或辅助工具

### 🔐 安全建议
1. **保护main分支**
   - 设置分支保护规则
   - 要求PR审查
   - 启用状态检查

2. **定期备份**
   - 在重要合并前创建备份分支
   ```bash
   git branch backup-main main
   ```

3. **使用标签**
   - 在重要版本创建标签
   ```bash
   git tag -a v1.0.0 -m "Version 1.0.0"
   git push origin v1.0.0
   ```

---

## 快速参考

### GitHub Desktop快捷键
| 操作 | Windows | Mac |
|------|---------|-----|
| 提交 | Ctrl+Enter | Cmd+Enter |
| 推送 | Ctrl+P | Cmd+P |
| 拉取 | Ctrl+Shift+P | Cmd+Shift+P |
| 新分支 | Ctrl+Shift+N | Cmd+Shift+N |
| 切换分支 | Ctrl+B | Cmd+B |
| 历史 | Ctrl+2 | Cmd+2 |
| 更改 | Ctrl+1 | Cmd+1 |

### 合并策略对比
| 策略 | 历史 | 适用场景 |
|------|------|---------|
| Merge | 保留所有 | 默认选择 |
| Squash | 压缩为一个 | 功能分支 |
| Rebase | 线性历史 | 保持整洁 |

---

## 实战示例：合并i18n-dev到main

基于你当前的情况，推荐步骤：

### 立即执行步骤
1. **提交PR_TEMPLATE.md**
   ```
   Summary: "docs: Add PR template"
   点击 "Commit to i18n-dev"
   ```

2. **推送到GitHub**
   ```
   点击 "Push origin" (显示1个commit待推送)
   ```

3. **创建Pull Request**
   ```
   Branch → Create Pull Request
   或访问: https://github.com/chen1360245/cagr/compare/main...i18n-dev
   ```

4. **在GitHub网页完成合并**
   ```
   填写PR描述 → Create pull request → Merge pull request
   ```

5. **同步本地main分支**
   ```
   切换到main → Fetch origin → Pull origin
   ```

---

## 总结

GitHub Desktop提供了多种合并分支的方法，选择哪种取决于：
- 项目规模和团队大小
- 是否需要code review
- 对历史记录的要求
- 紧急程度

对于重要的功能合并，**始终推荐使用Pull Request**，这样可以：
- 保留完整的讨论和决策过程
- 允许其他人review代码
- 自动运行CI/CD检查
- 提供回滚的便利性

记住：**合并前先提交，合并后要推送！**

---

*最后更新：2025-01-23*
*适用版本：GitHub Desktop 3.x*
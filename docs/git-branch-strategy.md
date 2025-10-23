# Git分支管理策略指南

## 🤔 核心问题：继续使用旧分支还是创建新分支？

### 当前状况分析
- ✅ `i18n-dev`分支已成功合并到`main`
- ✅ 网站已部署（基于main分支）
- 🎯 需要继续开发多语言功能
- ⚠️ 不想直接在main上工作

---

## 📊 两种选择对比

### 选择1：继续使用`i18n-dev`分支 ♻️

#### ✅ 优点
- 不需要创建新分支，直接继续工作
- 分支名称语义清晰，仍然是i18n相关
- 保持团队对分支的认知一致性
- 适合**持续的功能开发**

#### ❌ 缺点
- 历史记录可能混淆不同开发阶段
- 如果后续需要独立发布某个语言，会比较困难
- 分支会变得越来越长，历史复杂

#### 🎯 适用场景
- 继续相同主题的开发（如添加更多语言）
- 短期内的功能迭代
- 团队规模小，分支管理简单

---

### 选择2：创建新分支（推荐）🌟

#### ✅ 优点
- 每个功能/阶段独立管理
- 历史记录清晰，便于追溯
- 可以灵活控制发布节奏
- 符合Git Flow最佳实践
- 便于回滚和版本控制

#### ❌ 缺点
- 需要多管理一个分支
- 需要定期清理已合并的旧分支

#### 🎯 适用场景
- 添加新语言（如日语、法语等）
- 独立的功能开发
- 需要精细控制发布节奏
- **正式生产环境**（你的情况）

---

## 🎯 针对你的情况的推荐

### 推荐方案：创建新分支 ✨

**理由**：
1. **网站已部署** - 需要更严格的分支管理
2. **添加新语言** - 每个语言可以作为独立的功能
3. **更好的版本控制** - 便于回滚和测试
4. **专业的工作流** - 符合行业最佳实践

### 分支命名建议

根据具体开发内容选择：

| 开发内容 | 推荐分支名 | 说明 |
|---------|-----------|------|
| 添加日语支持 | `i18n-japanese` | 单一语言 |
| 添加多个语言 | `i18n-expansion` | 扩展计划 |
| 优化i18n性能 | `i18n-performance` | 性能优化 |
| 修复i18n bug | `i18n-fix-xxx` | Bug修复 |
| RTL语言支持 | `i18n-rtl-support` | 特定功能 |

---

## 📝 具体操作步骤

### 方案A：创建新的i18n分支（推荐）

#### 步骤1：确保main分支是最新的
```bash
# 在GitHub Desktop中：
1. 切换到main分支（如果不在）
2. 点击 "Fetch origin"
3. 如果有更新，点击 "Pull origin"

# 或使用命令行：
git checkout main
git pull origin main
```

#### 步骤2：创建新分支
```bash
# 在GitHub Desktop中：
1. 点击 "Current branch" 下拉菜单
2. 点击 "New Branch"
3. 输入分支名，例如："i18n-expansion"
4. 确保 "Create branch from: main" 是选中的
5. 点击 "Create Branch"

# 或使用命令行：
git checkout -b i18n-expansion main
```

#### 步骤3：推送新分支到远程
```bash
# GitHub Desktop会自动提示
# 点击 "Publish branch"

# 或使用命令行：
git push -u origin i18n-expansion
```

#### 步骤4：开始开发
```bash
# 现在你在新分支上，可以安全地开发了
# 所有更改不会影响main分支和已部署的网站
```

---

### 方案B：继续使用i18n-dev分支

#### 步骤1：更新i18n-dev分支
```bash
# 在GitHub Desktop中：
1. 切换到i18n-dev分支
2. Branch → Update from main
3. 解决可能的冲突（应该没有）
4. Push origin

# 或使用命令行：
git checkout i18n-dev
git merge main
git push origin i18n-dev
```

#### 步骤2：继续开发
```bash
# 现在i18n-dev包含最新的main代码
# 可以继续开发了
```

---

## 🌳 推荐的Git Flow工作流

### 标准分支结构

```
main (生产分支，已部署)
  ↑
  │ (合并)
  │
develop (开发主分支) - 可选
  ↑
  │ (合并)
  │
feature/i18n-japanese (功能分支)
feature/i18n-french (功能分支)
feature/i18n-spanish (功能分支)
```

### 实际应用到你的项目

```
main
  ↑
  │ 通过PR合并
  │
i18n-expansion (当前开发)
  ↑
  │ 按需合并
  │
i18n-japanese (具体语言，可选)
i18n-french (具体语言，可选)
```

---

## 🎨 分支命名规范

### 命名模式
```
<type>/<description>
```

### 类型（type）
- `feature/` - 新功能
- `fix/` - Bug修复
- `hotfix/` - 紧急修复
- `refactor/` - 重构
- `docs/` - 文档更新
- `test/` - 测试
- `i18n/` - 国际化相关

### 示例
```bash
i18n/add-japanese-support
i18n/rtl-languages
i18n/translation-optimization
feature/i18n-auto-detect
fix/i18n-date-format
```

---

## 🔄 完整的开发流程

### 1. 开始新功能
```bash
# 从最新的main创建分支
git checkout main
git pull origin main
git checkout -b i18n-japanese
git push -u origin i18n-japanese
```

### 2. 日常开发
```bash
# 定期提交
git add .
git commit -m "feat: Add Japanese translation files"
git push origin i18n-japanese

# 定期从main更新（保持同步）
git checkout main
git pull origin main
git checkout i18n-japanese
git merge main
```

### 3. 功能完成
```bash
# 创建Pull Request
# 在GitHub Desktop: Branch → Create Pull Request
# 或访问GitHub网页创建PR

# Code Review后合并到main
# 删除已合并的分支（可选）
git branch -d i18n-japanese
git push origin --delete i18n-japanese
```

### 4. 部署后验证
```bash
# 切换到main
git checkout main
git pull origin main

# 创建标签（可选）
git tag -a v1.1.0 -m "Add Japanese language support"
git push origin v1.1.0
```

---

## 🛡️ 分支保护策略

### GitHub分支保护设置

建议为main分支设置保护规则：

1. **登录GitHub仓库**
2. **Settings → Branches**
3. **Add rule for main branch**：
   - ✅ Require a pull request before merging
   - ✅ Require approvals (如果是团队)
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators (严格模式)

这样可以**防止直接推送到main**，保护生产环境。

---

## 📊 分支管理最佳实践

### ✅ DO - 应该做的

1. **频繁提交，小步快跑**
   ```bash
   # 每完成一个小功能就提交
   git commit -m "feat: Add Japanese navigation translations"
   ```

2. **使用描述性的commit信息**
   ```bash
   # 好的commit
   git commit -m "feat(i18n): Add Japanese language support with full translations"

   # 不好的commit
   git commit -m "update files"
   ```

3. **定期同步main分支**
   ```bash
   # 每天或每周同步一次
   git checkout i18n-expansion
   git merge main
   ```

4. **使用Pull Request进行合并**
   - 便于Code Review
   - 自动运行测试
   - 保留讨论记录

5. **及时清理已合并的分支**
   ```bash
   # 本地删除
   git branch -d branch-name

   # 远程删除
   git push origin --delete branch-name
   ```

### ❌ DON'T - 不应该做的

1. **不要直接在main分支开发**
   ```bash
   # 错误做法
   git checkout main
   # ... 直接修改代码 ...
   ```

2. **不要长期不合并分支**
   - 避免分支存活超过2周
   - 越早合并，冲突越少

3. **不要在分支间随意切换而不提交**
   ```bash
   # 错误做法
   # 在i18n-dev上修改了代码
   git checkout main  # 未提交就切换 - 可能丢失更改
   ```

4. **不要混合不相关的功能**
   ```bash
   # 错误做法：在i18n分支中修复无关的bug
   # 应该：创建独立的fix分支
   ```

---

## 🚀 实战：添加新语言的完整流程

### 场景：添加日语支持

#### Phase 1: 准备工作
```bash
# 1. 更新main分支
git checkout main
git pull origin main

# 2. 创建新分支
git checkout -b i18n/add-japanese
git push -u origin i18n/add-japanese
```

#### Phase 2: 开发
```bash
# 3. 创建日语翻译文件
# 复制 messages/en.json → messages/ja.json
# 翻译所有内容

# 4. 更新配置
# 修改 i18n/config.ts，添加 'ja'
# 修改 middleware.ts

# 5. 测试
npm run dev
# 访问 http://localhost:3000/ja

# 6. 提交
git add .
git commit -m "feat(i18n): Add Japanese language support"
git push origin i18n/add-japanese
```

#### Phase 3: 合并
```bash
# 7. 创建Pull Request
# GitHub Desktop: Branch → Create Pull Request
# 填写PR描述

# 8. Code Review后合并
# 在GitHub上点击 Merge

# 9. 同步本地main
git checkout main
git pull origin main

# 10. 删除功能分支
git branch -d i18n/add-japanese
git push origin --delete i18n/add-japanese
```

---

## 📈 分支可视化管理

### 使用GitHub Desktop查看分支图
```
1. View → Branch Graph（如果可用）
2. 或者使用 History 标签查看分支历史
```

### 使用命令行查看分支图
```bash
# 图形化显示分支历史
git log --graph --oneline --all --decorate

# 更详细的版本
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all
```

---

## 🎯 针对你的下一步建议

### 立即行动方案

**推荐：创建新分支 `i18n-expansion`**

```bash
# 在GitHub Desktop中执行：

1. 确保当前在main分支
   - Current branch显示 "main"

2. 点击 "Current branch" 下拉菜单

3. 点击 "New Branch" 按钮

4. 输入分支名：
   - "i18n-expansion" 或 "i18n/add-languages"

5. 确认 "Create branch from: main"

6. 点击 "Create Branch"

7. 点击 "Publish branch" 推送到GitHub

8. 开始开发！
```

### 未来的分支策略

根据你的需求，建议：

| 任务 | 分支名 | 基于 |
|------|-------|------|
| 添加多个语言 | `i18n-expansion` | main |
| 添加日语 | `i18n/japanese` | i18n-expansion |
| 修复翻译bug | `fix/i18n-translation` | main |
| i18n性能优化 | `refactor/i18n-perf` | main |

---

## 📚 参考资源

### Git Flow文档
- [Git Flow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)

### 最佳实践文章
- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Branch Naming Convention](https://deepsource.io/blog/git-branch-naming-conventions/)

---

## 🤝 总结与建议

### 对于你的情况：

**✅ 强烈推荐：创建新分支 `i18n-expansion`**

理由：
1. 网站已部署，需要稳定的main分支
2. 新语言开发是独立功能，应该独立管理
3. 便于控制发布节奏和质量
4. 符合专业开发流程

**❌ 不推荐：继续使用i18n-dev**

理由：
1. 历史会变得混乱
2. 难以区分不同开发阶段
3. 不符合"功能分支"的最佳实践

### 核心原则：

> **"main分支永远是可部署的，功能开发在独立分支"**

这样可以：
- 保护生产环境
- 灵活控制发布
- 便于团队协作
- 方便回滚和调试

---

*最后更新：2025-01-23*
*版本：1.0*
# 图标生成说明

## 快速开始（临时方案）

扩展当前使用基本的SVG图标。用于生产环境时，您需要创建3个尺寸的PNG图标：
- icon16.png (16x16)
- icon48.png (48x48)
- icon128.png (128x128)

## 方法1：将SVG转换为PNG（推荐）

### 使用在线工具：
1. 访问 https://cloudconvert.com/svg-to-png
2. 上传 `icons/icon.svg`
3. 设置输出尺寸：16x16, 48x48, 128x128
4. 下载并重命名文件
5. 放置在 `icons/` 文件夹中

### 使用ImageMagick（命令行）：
```bash
# 首先安装ImageMagick
# 然后运行：
magick icons/icon.svg -resize 16x16 icons/icon16.png
magick icons/icon.svg -resize 48x48 icons/icon48.png
magick icons/icon.svg -resize 128x128 icons/icon128.png
```

## 方法2：设计自定义图标

### 设计指南：
- **风格**：现代、简约、金融主题
- **颜色**：主绿色（#00D395）、白色、金色点缀
- **元素**：
  - 📊 增长图表/柱状图（显示上升趋势）
  - 📈 向上箭头
  - 文字"CAGR"或百分比符号
- **背景**：纯绿色或渐变
- **安全区域**：重要元素离边缘保持10%距离

### 工具：
- **Figma**（免费）：https://figma.com
- **Canva**（免费）：https://canva.com
- **Photoshop/Illustrator**（付费）

### 模板尺寸：
创建3个画板：
1. 16x16px - 简单图标（仅柱状图或符号）
2. 48x48px - 带细节的图标
3. 128x128px - 带文字的完整设计

## 图标设计灵感

```
┌─────────────────────────┐
│  128x128 图标设计       │
├─────────────────────────┤
│                         │
│   [绿色背景]            │
│                         │
│       📊 📈 ↗️           │
│     增长柱状图          │
│                         │
│        CAGR             │
│                         │
└─────────────────────────┘
```

## 快速PNG生成（无需设计软件）

使用此Python脚本生成基本图标：

```python
# pip install pillow
from PIL import Image, ImageDraw, ImageFont

def create_icon(size):
    img = Image.new('RGB', (size, size), '#00D395')
    draw = ImageDraw.Draw(img)

    # 绘制简单柱状图
    bar_width = size // 8
    bar_spacing = size // 6

    for i in range(3):
        height = (size // 3) * (i + 1)
        x = bar_spacing + (bar_spacing * i)
        y = size - height - (size // 10)
        draw.rectangle([x, y, x + bar_width, size - (size // 10)], fill='white')

    img.save(f'icon{size}.png')

create_icon(16)
create_icon(48)
create_icon(128)
print('图标创建成功！')
```

## 当前状态

- ✅ SVG模板已创建
- ❌ PNG图标尚未生成
- ⚠️ 在添加PNG文件之前，扩展将使用Chrome默认图标

## 下一步

1. 使用上述方法之一生成PNG图标
2. 将它们放在 `icons/` 文件夹中：
   - icon16.png
   - icon48.png
   - icon128.png
3. 测试扩展以验证图标正确显示

---

**注意**：即使没有自定义图标，扩展仍可正常工作（Chrome将显示默认图标），但建议使用自定义图标以获得专业外观。

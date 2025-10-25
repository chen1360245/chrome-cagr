#!/usr/bin/env python3
"""
生成Chrome扩展所需的PNG图标
基于品牌颜色创建简单但专业的图标
"""

from PIL import Image, ImageDraw, ImageFont
import os

# 输出目录
output_dir = "icons"
os.makedirs(output_dir, exist_ok=True)

# 品牌颜色（金融主题 - 蓝色渐变）
BG_COLOR_1 = (41, 128, 185)  # 深蓝
BG_COLOR_2 = (52, 152, 219)  # 亮蓝
TEXT_COLOR = (255, 255, 255)  # 白色

def create_gradient_background(width, height):
    """创建渐变背景"""
    image = Image.new('RGB', (width, height), BG_COLOR_1)
    draw = ImageDraw.Draw(image)

    # 创建简单的线性渐变
    for y in range(height):
        ratio = y / height
        r = int(BG_COLOR_1[0] + (BG_COLOR_2[0] - BG_COLOR_1[0]) * ratio)
        g = int(BG_COLOR_1[1] + (BG_COLOR_2[1] - BG_COLOR_1[1]) * ratio)
        b = int(BG_COLOR_1[2] + (BG_COLOR_2[2] - BG_COLOR_1[2]) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    return image

def create_icon(size):
    """创建指定尺寸的图标"""
    # 创建带渐变背景的图像
    img = create_gradient_background(size, size)
    draw = ImageDraw.Draw(img)

    # 添加圆角效果（可选）
    # 为小图标添加简单的设计元素

    if size >= 48:
        # 对于大图标，添加文字 "C"（CAGR的首字母）
        try:
            # 尝试使用系统字体
            font_size = int(size * 0.6)
            # Windows常见字体
            font_paths = [
                "C:\\Windows\\Fonts\\arial.ttf",
                "C:\\Windows\\Fonts\\calibri.ttf",
                "arial.ttf",
                "calibri.ttf"
            ]

            font = None
            for font_path in font_paths:
                try:
                    font = ImageFont.truetype(font_path, font_size)
                    break
                except:
                    continue

            if font:
                # 绘制文字 "C"
                text = "C"
                # 计算文字位置（居中）
                bbox = draw.textbbox((0, 0), text, font=font)
                text_width = bbox[2] - bbox[0]
                text_height = bbox[3] - bbox[1]
                x = (size - text_width) // 2
                y = (size - text_height) // 2 - bbox[1]

                # 添加阴影效果
                draw.text((x+2, y+2), text, font=font, fill=(0, 0, 0, 128))
                # 绘制主文字
                draw.text((x, y), text, font=font, fill=TEXT_COLOR)
        except Exception as e:
            print(f"警告：无法加载字体，使用简单图形 - {e}")
            # 如果无法加载字体，绘制一个简单的图形
            margin = size // 4
            draw.ellipse([margin, margin, size-margin, size-margin],
                        outline=TEXT_COLOR, width=max(2, size//16))
    else:
        # 对于16x16小图标，使用简单的圆形
        margin = 3
        draw.ellipse([margin, margin, size-margin, size-margin],
                    fill=TEXT_COLOR)

    return img

def main():
    """生成所有需要的图标尺寸"""
    sizes = [16, 48, 128]

    print("Starting PNG icon generation...")

    for size in sizes:
        filename = f"icon{size}.png"
        filepath = os.path.join(output_dir, filename)

        print(f"  - Creating {filename} ({size}x{size})")
        icon = create_icon(size)
        icon.save(filepath, "PNG")
        print(f"    [OK] Saved to {filepath}")

    print("\n[SUCCESS] All icons generated!")
    print(f"Icon location: {os.path.abspath(output_dir)}")
    print("\nGenerated files:")
    for size in sizes:
        filepath = os.path.join(output_dir, f"icon{size}.png")
        if os.path.exists(filepath):
            file_size = os.path.getsize(filepath)
            print(f"  [OK] icon{size}.png - {file_size} bytes")

if __name__ == "__main__":
    main()

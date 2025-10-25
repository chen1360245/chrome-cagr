#!/usr/bin/env python3
"""
Chrome Web Store 截图尺寸调整工具
将小尺寸截图调整为 1280x800 的专业展示图
"""

from PIL import Image, ImageDraw, ImageFont
import os

# 配置
TARGET_WIDTH = 1280
TARGET_HEIGHT = 800
BACKGROUND_COLOR = (103, 126, 234)  # 渐变蓝色
BACKGROUND_COLOR_2 = (118, 75, 162)  # 渐变紫色

# 截图信息
SCREENSHOTS = [
    {
        'input': 'screenshot-1-main-interface-en.png',
        'output': 'store-screenshot-1.png',
        'title': 'Smart 4-Parameter Calculator',
        'subtitle': 'Input any 3 values, automatically calculate the 4th'
    },
    {
        'input': 'screenshot-2-calculation-result-en.png',
        'output': 'store-screenshot-2.png',
        'title': 'Instant Calculation Results',
        'subtitle': 'Get detailed insights and market comparisons'
    },
    {
        'input': 'screenshot-3-chinese-interface.png',
        'output': 'store-screenshot-3.png',
        'title': 'Multi-Language Support',
        'subtitle': 'Available in 9 languages including Chinese'
    },
    {
        'input': 'screenshot-4-smart-detection-en.png',
        'output': 'store-screenshot-4.png',
        'title': 'Intelligent Mode Detection',
        'subtitle': 'Automatically detects which parameter to calculate'
    },
    {
        'input': 'screenshot-5-insights-en.png',
        'output': 'store-screenshot-5.png',
        'title': 'Investment Insights',
        'subtitle': 'Compare with market benchmarks and get recommendations'
    }
]


def create_gradient_background(width, height, color1, color2):
    """创建渐变背景"""
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)

    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        mask_data.extend([int(255 * (y / height))] * width)
    mask.putdata(mask_data)

    base.paste(top, (0, 0), mask)
    return base


def add_text_to_image(image, title, subtitle):
    """在图片上添加文字"""
    draw = ImageDraw.Draw(image)

    # 尝试加载字体，如果失败则使用默认字体
    try:
        title_font = ImageFont.truetype("arial.ttf", 48)
        subtitle_font = ImageFont.truetype("arial.ttf", 24)
    except:
        # 如果找不到字体，使用默认字体
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    # 绘制标题（顶部）
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (TARGET_WIDTH - title_width) // 2
    title_y = 40

    # 添加文字阴影
    draw.text((title_x + 2, title_y + 2), title, font=title_font, fill=(0, 0, 0, 128))
    draw.text((title_x, title_y), title, font=title_font, fill=(255, 255, 255))

    # 绘制副标题（底部）
    subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (TARGET_WIDTH - subtitle_width) // 2
    subtitle_y = TARGET_HEIGHT - 60

    # 添加文字阴影
    draw.text((subtitle_x + 1, subtitle_y + 1), subtitle, font=subtitle_font, fill=(0, 0, 0, 128))
    draw.text((subtitle_x, subtitle_y), subtitle, font=subtitle_font, fill=(255, 255, 255))

    return image


def process_screenshot(input_file, output_file, title, subtitle):
    """处理单张截图"""
    print(f"Processing: {input_file} -> {output_file}")

    # 读取原始截图
    screenshot = Image.open(input_file)

    # 创建渐变背景
    canvas = create_gradient_background(TARGET_WIDTH, TARGET_HEIGHT, BACKGROUND_COLOR, BACKGROUND_COLOR_2)

    # 计算截图放置位置（居中）
    screenshot_x = (TARGET_WIDTH - screenshot.width) // 2
    screenshot_y = (TARGET_HEIGHT - screenshot.height) // 2

    # 粘贴截图到画布
    canvas.paste(screenshot, (screenshot_x, screenshot_y))

    # 添加文字
    canvas = add_text_to_image(canvas, title, subtitle)

    # 保存
    canvas.save(output_file, 'PNG', optimize=True)
    print(f"[OK] Created: {output_file} ({TARGET_WIDTH}x{TARGET_HEIGHT})")


def main():
    """主函数"""
    print("=" * 60)
    print("Chrome Web Store Screenshot Resizer")
    print("=" * 60)
    print(f"Target size: {TARGET_WIDTH} x {TARGET_HEIGHT}")
    print(f"Processing {len(SCREENSHOTS)} screenshots...")
    print()

    success_count = 0

    for item in SCREENSHOTS:
        try:
            if not os.path.exists(item['input']):
                print(f"[ERROR] File not found: {item['input']}")
                continue

            process_screenshot(
                item['input'],
                item['output'],
                item['title'],
                item['subtitle']
            )
            success_count += 1
            print()

        except Exception as e:
            print(f"[ERROR] Error processing {item['input']}: {e}")
            print()

    print("=" * 60)
    print(f"[SUCCESS] Successfully processed: {success_count}/{len(SCREENSHOTS)}")
    print("=" * 60)
    print()
    print("Generated files:")
    for item in SCREENSHOTS:
        if os.path.exists(item['output']):
            size = os.path.getsize(item['output']) / 1024
            print(f"  [OK] {item['output']} ({size:.1f} KB)")
    print()
    print("[DONE] All done! You can now upload these screenshots to Chrome Web Store.")


if __name__ == '__main__':
    main()

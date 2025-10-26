#!/usr/bin/env python3
"""
Generate Chrome Extension icons from SVG
Converts icon-only.svg to multiple PNG sizes
"""

import os
from pathlib import Path

# Try to import required libraries
try:
    from PIL import Image, ImageDraw
    import io
except ImportError:
    print("Error: Pillow is required. Install it with: pip install Pillow")
    exit(1)

# Check for cairosvg (for SVG to PNG conversion)
try:
    import cairosvg
    HAS_CAIROSVG = True
except ImportError:
    HAS_CAIROSVG = False
    print("Warning: cairosvg not found. Will try alternative method.")

def svg_to_png_cairosvg(svg_path, output_path, size):
    """Convert SVG to PNG using cairosvg"""
    cairosvg.svg2png(
        url=svg_path,
        write_to=output_path,
        output_width=size,
        output_height=size
    )

def svg_to_png_manual(svg_path, output_path, size):
    """Manual drawing of the CAGR icon (fallback method)"""
    # Create a new image with transparency
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)

    # Calculate scaling factor
    scale = size / 50.0

    # Blue color
    blue = (59, 130, 246)
    blue_light = (59, 130, 246, 26)  # 10% opacity

    # Draw background circle with light blue fill
    center = size // 2
    radius_outer = int(23 * scale)
    radius_inner = int(20 * scale)

    # Draw light blue background circle
    draw.ellipse(
        [(center - radius_outer, center - radius_outer),
         (center + radius_outer, center + radius_outer)],
        fill=blue_light
    )

    # Draw blue circle outline (thicker for visibility)
    stroke_width = max(2, int(2 * scale))
    for i in range(stroke_width):
        draw.ellipse(
            [(center - radius_inner - i, center - radius_inner - i),
             (center + radius_inner + i, center + radius_inner + i)],
            outline=blue
        )

    # Draw growth curve (simplified as line segments)
    curve_stroke = max(2, int(2.5 * scale))

    # Points for the curve
    points = [
        (int(12 * scale), int(35 * scale)),
        (int(16 * scale), int(30 * scale)),
        (int(20 * scale), int(25 * scale)),
        (int(24 * scale), int(20 * scale)),
        (int(28 * scale), int(15 * scale)),
        (int(32 * scale), int(12 * scale)),
        (int(35 * scale), int(10 * scale))
    ]

    # Draw curve as connected lines
    for i in range(len(points) - 1):
        for j in range(curve_stroke):
            offset_y = j - curve_stroke // 2
            p1 = (points[i][0], points[i][1] + offset_y)
            p2 = (points[i + 1][0], points[i + 1][1] + offset_y)
            draw.line([p1, p2], fill=blue, width=1)

    # Draw arrow head
    arrow_points = [
        (int(35 * scale), int(10 * scale)),
        (int(31 * scale), int(13 * scale)),
        (int(33 * scale), int(16 * scale))
    ]
    draw.polygon(arrow_points, fill=blue)

    # Draw data points (circles)
    data_points = [
        (int(12 * scale), int(35 * scale)),
        (int(20 * scale), int(25 * scale)),
        (int(28 * scale), int(15 * scale))
    ]

    point_radius = max(1, int(2 * scale))
    for px, py in data_points:
        draw.ellipse(
            [(px - point_radius, py - point_radius),
             (px + point_radius, py + point_radius)],
            fill=blue
        )

    # Save the image
    img.save(output_path, 'PNG', optimize=True)

def generate_icons():
    """Generate all required icon sizes"""
    # Paths
    script_dir = Path(__file__).parent
    svg_path = script_dir / 'icon-only.svg'

    # Icon sizes for Chrome Extension
    sizes = [16, 32, 48, 128]

    print("Generating Chrome Extension icons...")
    print(f"Source SVG: {svg_path}")
    print(f"Using {'cairosvg' if HAS_CAIROSVG else 'manual drawing'} method")
    print()

    if not svg_path.exists():
        print(f"Error: {svg_path} not found!")
        return False

    success_count = 0
    for size in sizes:
        output_path = script_dir / f'icon{size}.png'
        try:
            if HAS_CAIROSVG:
                svg_to_png_cairosvg(str(svg_path), str(output_path), size)
            else:
                svg_to_png_manual(str(svg_path), str(output_path), size)

            # Verify the output
            with Image.open(output_path) as img:
                actual_size = img.size
                if actual_size == (size, size):
                    print(f"[OK] Generated icon{size}.png ({size}x{size})")
                    success_count += 1
                else:
                    print(f"[ERROR] icon{size}.png has wrong size: {actual_size}")
        except Exception as e:
            print(f"[ERROR] Failed to generate icon{size}.png: {e}")

    print()
    print(f"Successfully generated {success_count}/{len(sizes)} icons")
    return success_count == len(sizes)

if __name__ == '__main__':
    print("=" * 60)
    print("Chrome Extension Icon Generator")
    print("=" * 60)
    print()

    success = generate_icons()

    print()
    if success:
        print("All icons generated successfully!")
        print()
        print("Generated files:")
        print("  - icon16.png  (16x16)   - Toolbar icon")
        print("  - icon32.png  (32x32)   - Windows taskbar")
        print("  - icon48.png  (48x48)   - Extension management page")
        print("  - icon128.png (128x128) - Chrome Web Store")
    else:
        print("Some icons failed to generate. Please check the errors above.")

    print()
    print("=" * 60)

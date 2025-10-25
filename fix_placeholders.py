#!/usr/bin/env python3
"""
将所有语言的explanation占位符替换为纯文本标记
从 $1$, $2$ 格式改为 _PV_, _FV_, _N_, _R_ 格式
"""

import json
import os
import re

def fix_explanation_placeholders(lang_code):
    """修复指定语言的explanation占位符"""
    file_path = f"_locales/{lang_code}/messages.json"

    try:
        # 读取文件
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # 检查是否有explanation条目
        has_explanation = any(key.startswith('explanation') for key in data.keys())
        if not has_explanation:
            print(f"[SKIP] {lang_code} - No explanation entries")
            return

        # 定义替换规则（根据之前的参数顺序）
        replacements = {
            'explanationCAGR': [
                (r'\$1\$', '_PV_'),
                (r'\$2\$', '_FV_'),
                (r'\$3\$', '_N_'),
                (r'\$4\$', '_R_'),
            ],
            'explanationFV': [
                (r'\$1\$', '_PV_'),
                (r'\$2\$', '_R_'),
                (r'\$3\$', '_N_'),
                (r'\$4\$', '_FV_'),
            ],
            'explanationPV': [
                (r'\$1\$', '_N_'),
                (r'\$2\$', '_R_'),
                (r'\$3\$', '_FV_'),
                (r'\$4\$', '_PV_'),
            ],
            'explanationTIME': [
                (r'\$1\$', '_PV_'),
                (r'\$2\$', '_FV_'),
                (r'\$3\$', '_R_'),
                (r'\$4\$', '_N_'),
            ]
        }

        modified = False
        for key, rules in replacements.items():
            if key in data and 'message' in data[key]:
                message = data[key]['message']

                # 应用所有替换
                for pattern, replacement in rules:
                    message = re.sub(pattern, replacement, message)

                # 更新message
                data[key] = {'message': message}
                modified = True

        if modified:
            # 写回文件
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"[OK] Fixed {lang_code}")
        else:
            print(f"[SKIP] {lang_code} - No changes needed")

    except Exception as e:
        print(f"[ERROR] {lang_code}: {e}")

def main():
    """主函数"""
    os.chdir("D:\\program files\\AIweb\\cagr-chrome")

    # 需要修复的语言（排除en和zh_CN，已手动修复）
    languages = ['fr', 'es', 'de', 'ja', 'ko', 'pt_BR', 'ar']

    print("Replacing placeholder formats in all languages...")
    print("-" * 50)

    for lang in languages:
        fix_explanation_placeholders(lang)

    print("-" * 50)
    print("Done! All placeholders replaced with _PV_, _FV_, _N_, _R_")

if __name__ == "__main__":
    main()

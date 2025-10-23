#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
端口清理脚本
清理 3000-3010 端口上运行的所有进程
适用于 Windows 系统
"""

import subprocess
import sys


def find_pid_by_port(port):
    """通过端口查找占用的进程PID"""
    try:
        cmd = f'netstat -ano | findstr :{port}'
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            encoding='gbk'
        )

        if result.returncode != 0:
            return None

        lines = result.stdout.strip().split('\n')
        pids = set()

        for line in lines:
            if not line.strip():
                continue
            if 'LISTENING' in line or 'ESTABLISHED' in line:
                parts = line.split()
                if len(parts) >= 5:
                    pid = parts[-1]
                    if pid.isdigit():
                        pids.add(int(pid))

        return list(pids) if pids else None

    except Exception as e:
        print(f"  [警告] 查找端口 {port} 时出错: {e}")
        return None


def kill_process(pid):
    """强制终止指定PID的进程"""
    try:
        cmd = f'taskkill /F /PID {pid}'
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            encoding='gbk'
        )
        return result.returncode == 0
    except Exception as e:
        print(f"  [警告] 终止进程 {pid} 时出错: {e}")
        return False


def get_process_name(pid):
    """获取进程名称"""
    try:
        cmd = f'tasklist /FI "PID eq {pid}" /FO CSV /NH'
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            encoding='gbk'
        )

        if result.returncode == 0 and result.stdout:
            parts = result.stdout.strip().split(',')
            if parts:
                return parts[0].strip('"')
        return "Unknown"
    except:
        return "Unknown"


def clean_ports(start_port, end_port):
    """清理指定范围的端口"""
    print(f"\n[INFO] 开始扫描端口 {start_port}-{end_port}...\n")

    killed_count = 0
    scanned_count = 0

    for port in range(start_port, end_port + 1):
        scanned_count += 1
        print(f"[{scanned_count}/{end_port - start_port + 1}] 检查端口 {port}...", end=' ')

        pids = find_pid_by_port(port)

        if not pids:
            print("[OK] 空闲")
            continue

        print(f"[BUSY] 被占用 (PID: {', '.join(map(str, pids))})")

        for pid in pids:
            process_name = get_process_name(pid)
            print(f"      |-- 进程: {process_name} (PID: {pid})")

            if kill_process(pid):
                print(f"      |-- [SUCCESS] 已终止")
                killed_count += 1
            else:
                print(f"      |-- [FAILED] 终止失败")

    print(f"\n{'='*60}")
    print(f"[SUMMARY] 扫描完成！")
    print(f"   - 扫描端口: {scanned_count} 个")
    print(f"   - 终止进程: {killed_count} 个")
    print(f"{'='*60}\n")


def main():
    """主函数"""
    print("\n" + "="*60)
    print("  [端口清理工具]")
    print("  清理范围: 3000-3010 端口")
    print("="*60)

    if sys.platform != 'win32':
        print("\n[ERROR] 此脚本仅支持 Windows 系统")
        print("   对于 Linux/Mac，请使用以下命令:")
        print("   lsof -ti:3000-3010 | xargs kill -9")
        sys.exit(1)

    try:
        clean_ports(3000, 3010)
        print("[SUCCESS] 清理完成！所有指定端口的进程已终止。\n")

    except KeyboardInterrupt:
        print("\n\n[INFO] 操作已被用户中断\n")
        sys.exit(0)

    except Exception as e:
        print(f"\n[ERROR] 发生错误: {e}\n")
        sys.exit(1)


if __name__ == "__main__":
    main()

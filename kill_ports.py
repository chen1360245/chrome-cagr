#!/usr/bin/env python3
"""
端口清理脚本
清理 3000-3010 端口上运行的所有进程
适用于 Windows 系统
"""

import subprocess
import sys
import re


def find_pid_by_port(port):
    """通过端口查找占用的进程PID"""
    try:
        # 在 Windows 上使用 netstat 命令
        cmd = f'netstat -ano | findstr :{port}'
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            encoding='gbk'  # Windows 中文系统使用 gbk 编码
        )

        if result.returncode != 0:
            return None

        # 解析输出获取 PID
        lines = result.stdout.strip().split('\n')
        pids = set()

        for line in lines:
            if not line.strip():
                continue
            # 查找 LISTENING 状态的连接
            if 'LISTENING' in line or 'ESTABLISHED' in line:
                # netstat 输出格式：协议 本地地址 外部地址 状态 PID
                parts = line.split()
                if len(parts) >= 5:
                    pid = parts[-1]
                    if pid.isdigit():
                        pids.add(int(pid))

        return list(pids) if pids else None

    except Exception as e:
        print(f"  ⚠️  查找端口 {port} 时出错: {e}")
        return None


def kill_process(pid):
    """强制终止指定PID的进程"""
    try:
        # 使用 taskkill /F 强制终止进程
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
        print(f"  ⚠️  终止进程 {pid} 时出错: {e}")
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
            # CSV 格式：进程名,PID,会话名,会话#,内存使用
            parts = result.stdout.strip().split(',')
            if parts:
                return parts[0].strip('"')

        return "Unknown"

    except:
        return "Unknown"


def clean_ports(start_port, end_port):
    """清理指定范围的端口"""
    print(f"\n🔍 开始扫描端口 {start_port}-{end_port}...\n")

    killed_count = 0
    scanned_count = 0

    for port in range(start_port, end_port + 1):
        scanned_count += 1
        print(f"[{scanned_count}/{end_port - start_port + 1}] 检查端口 {port}...", end=' ')

        pids = find_pid_by_port(port)

        if not pids:
            print("✅ 空闲")
            continue

        print(f"⚠️  被占用 (PID: {', '.join(map(str, pids))})")

        for pid in pids:
            process_name = get_process_name(pid)
            print(f"      ├─ 进程: {process_name} (PID: {pid})")

            if kill_process(pid):
                print(f"      └─ ✅ 已终止")
                killed_count += 1
            else:
                print(f"      └─ ❌ 终止失败")

    print(f"\n{'='*60}")
    print(f"📊 扫描完成！")
    print(f"   - 扫描端口: {scanned_count} 个")
    print(f"   - 终止进程: {killed_count} 个")
    print(f"{'='*60}\n")


def main():
    """主函数"""
    print("\n" + "="*60)
    print("  🧹 端口清理工具")
    print("  清理范围: 3000-3010 端口")
    print("="*60)

    # 检查是否在 Windows 系统上运行
    if sys.platform != 'win32':
        print("\n❌ 错误: 此脚本仅支持 Windows 系统")
        print("   对于 Linux/Mac，请使用以下命令:")
        print("   lsof -ti:3000-3010 | xargs kill -9")
        sys.exit(1)

    try:
        # 清理 3000-3010 端口
        clean_ports(3000, 3010)

        print("✅ 清理完成！所有指定端口的进程已终止。\n")

    except KeyboardInterrupt:
        print("\n\n⚠️  操作已被用户中断\n")
        sys.exit(0)

    except Exception as e:
        print(f"\n❌ 发生错误: {e}\n")
        sys.exit(1)


if __name__ == "__main__":
    main()

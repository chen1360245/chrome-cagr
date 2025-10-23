@echo off
REM 端口清理脚本 - 清理 3000-3010 端口
REM 使用方法: 双击运行此文件

echo ========================================
echo   端口清理工具
echo   清理范围: 3000-3010 端口
echo ========================================
echo.

set /a count=0

for /L %%p in (3000,1,3010) do (
    echo [正在检查] 端口 %%p...

    REM 查找占用端口的进程
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') do (
        set pid=%%a
        if not "!pid!"=="" (
            echo   ^|-- 发现进程 PID: !pid!
            taskkill /F /PID !pid! >nul 2>&1
            if !errorlevel! equ 0 (
                echo   ^|-- [成功] 已终止进程 !pid!
                set /a count+=1
            ) else (
                echo   ^|-- [失败] 无法终止进程 !pid!
            )
        )
    )
)

echo.
echo ========================================
echo 清理完成！共终止 %count% 个进程
echo ========================================
echo.

pause

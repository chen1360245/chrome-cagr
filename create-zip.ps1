# 创建干净的Chrome扩展ZIP包
# 排除不必要的文档文件

$ErrorActionPreference = "Stop"

# 切换到脚本所在的仓库目录
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

# 删除旧的ZIP（如果存在）
if (Test-Path "smart-cagr-calculator.zip") {
    Remove-Item "smart-cagr-calculator.zip" -Force
}

# 创建临时文件夹
$tempFolder = "temp_zip"
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Recurse -Force
}
New-Item -ItemType Directory -Path $tempFolder | Out-Null

# 复制必需文件
Copy-Item "manifest.json" -Destination $tempFolder
Copy-Item "logo-full.svg" -Destination $tempFolder

# 复制文件夹（排除MD文件）
Copy-Item "_locales" -Destination $tempFolder -Recurse
Copy-Item "popup" -Destination $tempFolder -Recurse
Copy-Item "lib" -Destination $tempFolder -Recurse

# 复制icons文件夹，但只要图片文件
New-Item -ItemType Directory -Path "$tempFolder\icons" | Out-Null
Copy-Item "icons\icon16.png" -Destination "$tempFolder\icons"
Copy-Item "icons\icon32.png" -Destination "$tempFolder\icons"
Copy-Item "icons\icon48.png" -Destination "$tempFolder\icons"
Copy-Item "icons\icon128.png" -Destination "$tempFolder\icons"

# 删除临时文件夹中的所有MD文件
Get-ChildItem -Path $tempFolder -Filter "*.md" -Recurse | Remove-Item -Force

# 创建ZIP
Compress-Archive -Path "$tempFolder\*" -DestinationPath "smart-cagr-calculator.zip" -Force

# 清理临时文件夹
Remove-Item $tempFolder -Recurse -Force

Write-Host "✅ ZIP包创建成功: smart-cagr-calculator.zip" -ForegroundColor Green

# 显示ZIP内容
Write-Host "`n📦 ZIP包内容:" -ForegroundColor Cyan
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path "smart-cagr-calculator.zip"))
$zip.Entries | Select-Object FullName | Format-Table -AutoSize
$zip.Dispose()

# 显示文件大小
$size = (Get-Item "smart-cagr-calculator.zip").Length
Write-Host "📏 文件大小: $([math]::Round($size/1KB, 2)) KB" -ForegroundColor Green

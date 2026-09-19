$ErrorActionPreference = "Stop"

$sourceDir = (Resolve-Path (Join-Path $PSScriptRoot "..\out")).Path
$zipPath = (Join-Path $PSScriptRoot "..\cartonagem-circulus-deploy.zip")

Write-Host "Creating deployment package for cPanel from: $sourceDir"

if (-not (Test-Path $sourceDir)) {
    Write-Error "The 'out' directory does not exist. Please run 'pnpm build' first."
    exit 1
}

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $sourceDir -Recurse -File -Force

$count = 0
foreach ($file in $files) {
    # Calculate relative path and force forward slashes (POSIX compatible for Linux/cPanel)
    $relativePath = $file.FullName.Substring($sourceDir.Length).TrimStart('\', '/').Replace('\', '/')
    
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $zip,
        $file.FullName,
        $relativePath,
        [System.IO.Compression.CompressionLevel]::Optimal
    )
    $count++
}

$zip.Dispose()

Write-Host "Successfully packaged $count files into $zipPath with POSIX forward-slash paths."

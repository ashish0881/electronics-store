# Script to get LocalTunnel URL
Write-Host "Starting LocalTunnel..." -ForegroundColor Green
Write-Host "Please wait a moment..." -ForegroundColor Yellow
Write-Host ""

# Start LocalTunnel and capture output
$process = Start-Process -FilePath "lt" -ArgumentList "--port","3000" -NoNewWindow -PassThru -RedirectStandardOutput "tunnel-output.txt" -RedirectStandardError "tunnel-error.txt"

Start-Sleep -Seconds 3

# Try to read the output
if (Test-Path "tunnel-output.txt") {
    $output = Get-Content "tunnel-output.txt" -ErrorAction SilentlyContinue
    Write-Host "Output:" -ForegroundColor Cyan
    Write-Host $output
}

# Alternative: Just run it directly so user can see
Write-Host ""
Write-Host "Running LocalTunnel directly..." -ForegroundColor Green
Write-Host "Your URL will appear below:" -ForegroundColor Yellow
Write-Host ""
lt --port 3000

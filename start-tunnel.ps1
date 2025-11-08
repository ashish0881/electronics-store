# PowerShell script to start LocalTunnel and show the URL
Write-Host "Starting LocalTunnel on port 3000..." -ForegroundColor Green
Write-Host "Make sure your Next.js app is running (npm run dev)" -ForegroundColor Yellow
Write-Host ""
Write-Host "Your shareable URL will appear below:" -ForegroundColor Cyan
Write-Host ""

lt --port 3000

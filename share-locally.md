# Quick Local Sharing with ngrok

## Steps:

1. **Install ngrok:**
   - Download from: https://ngrok.com/download
   - Or use: `choco install ngrok` (if you have Chocolatey)

2. **Make sure your app is running:**
   ```bash
   npm run dev
   ```

3. **In a new terminal, run:**
   ```bash
   ngrok http 3000
   ```

4. **Copy the Forwarding URL** (e.g., `https://abc123.ngrok.io`)

5. **Share that URL** with your friend!

The URL will work as long as:
- Your computer is on
- The dev server is running
- ngrok is running

---

## Alternative: Use localtunnel (npm package)

```bash
npm install -g localtunnel
lt --port 3000
```

This gives you a shareable URL instantly!

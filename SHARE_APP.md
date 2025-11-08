# Quick Share with LocalTunnel

## Your app is ready to share! 🚀

### Step 1: Make sure your app is running
Your Next.js app should be running on `http://localhost:3000`

### Step 2: Open a NEW terminal/PowerShell window

### Step 3: Run LocalTunnel
```bash
lt --port 3000
```

### Step 4: Copy the URL
You'll see output like this:
```
your url is: https://random-name.loca.lt
```

### Step 5: Share that URL with your friend!

---

## Example Output:
```
PS C:\Users\KUMARAE\Downloads\Project> lt --port 3000
your url is: https://happy-cat-123.loca.lt
```

**Share `https://happy-cat-123.loca.lt` with your friend!**

---

## Important Notes:

✅ **Keep both terminals open:**
- Terminal 1: `npm run dev` (your Next.js app)
- Terminal 2: `lt --port 3000` (LocalTunnel)

✅ The URL works as long as:
- Your computer is on
- Both processes are running
- You have internet connection

⚠️ **Free tier limitations:**
- URL changes each time you restart
- May have connection limits
- For permanent sharing, use Vercel instead

---

## Alternative: Run in one command
You can also use the PowerShell script:
```powershell
.\start-tunnel.ps1
```

---

## Troubleshooting:

**If port 3000 is busy:**
- Check if your dev server is running
- Or use a different port: `lt --port 3001`

**If you see connection errors:**
- Make sure your firewall allows the connection
- Try restarting LocalTunnel

**For permanent sharing:**
- Use Vercel deployment (see DEPLOYMENT_GUIDE.md)

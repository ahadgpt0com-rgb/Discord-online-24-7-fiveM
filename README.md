# Discord-Online-Forever & GTA VI Rich Presence 24/7
> **Copyright (c) ahadgpt. All rights reserved.**

Keep your Discord account online 24/7 on **Render.com** with **GTA VI Custom Rich Presence** (Logo, Details, State, and Timer).

---

### 🌐 Deploying to Render.com (24/7 Free)

1. **GitHub Upload**: Push this repository to GitHub.
2. **Go to Render**: Log in to [Render.com](https://render.com).
3. **New Web Service**: Click **New +** > **Web Service** and choose your repository.
4. **Build & Start Settings**:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js` (or `npm start`)
   - **Instance Type**: `Free`
5. **Environment Variables**:
   Under **Environment Variables**, add:
   - `token` : *Your Discord Account Token*
   - `CLIENT_ID` : `884374609527455764` *(Already set as default in code)*
6. Click **Deploy Web Service**.
7. **Keep Alive (Prevent Sleep)**:
   - Render's free tier sleeps after 15 minutes.
   - Copy your Render URL (e.g., `https://your-app.onrender.com`).
   - Go to [UptimeRobot.com](https://uptimerobot.com) or [cron-job.org](https://cron-job.org) and set up an HTTP monitor every 5 minutes pointing to your Render URL.

---
© Copyright by ahadgpt. All rights reserved.

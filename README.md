# Discord-Online-Forever
> **Copyright (c) ahadgpt. All rights reserved.**

Keep your Discord profile online forever with custom Rich Presence / Now Playing status.

### 🎮 Status Setup (Now Playing)
By default, it is configured to display:
- **Game**: `FiveM`
- **Details**: `Playing Grand Role Play - gta5grand.com`
- **Status**: `idle` (🌙 moon icon) or `online` (🟢)

You can customize these directly in `index.js` or via environment variables (`STATUS`, `GAME_NAME`, `GAME_DETAILS`).

### 🚀 Instructions
1. Register Replit - https://Replit.com
2. Run on Replit - https://replit.com/new/github/Gunthersuper/Discord-Online-Forever
3. Get Token of your Discord:
  - Login to your Discord in the browser
  - Press: CTRL+SHIFT+I or F12. Go to Network. Click some dialogue or some server
  - Find science / messages. Go to Headers. In request headers find: `authorization`. Copy this token
4. Go to replit, secrets. make new secret. Key is `token`, and value is your token
5. Run the bot
6. Go to https://uptimerobot.com, register. Click: Add new monitor
7. Monitor type is HTTP. Url is address you get on replit. Click create monitor (2 times)
8. Make sure the last session you were online

---
© Copyright by ahadgpt. All rights reserved.

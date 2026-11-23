// Copyright (c) ahadgpt. All rights reserved.
const Eris = require("eris");
const keep_alive = require("./keep_alive.js");

// Discord Developer Portal Application Client ID
const CLIENT_ID = process.env.CLIENT_ID || "884374609527455764";

// Replace TOKEN with your account token in environment variables
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`[+] Logged in as: ${bot.user.username}`);

  const startTimestamp = Date.now();

  // Set GTA VI Rich Presence on Discord Gateway (Render.com 24/7)
  bot.editStatus("online", [
    {
      name: "Grand Theft Auto VI",
      type: 0, // 0 = Playing
      application_id: CLIENT_ID,
      details: "Grand Theft Auto VI",
      state: "Exploring Vice City...",
      timestamps: {
        start: startTimestamp
      },
      assets: {
        large_image: "gta6_logo",
        large_text: "GTA VI - Next Gen Experience",
        small_image: "online_icon",
        small_text: "Online in Vice City"
      }
    }
  ]);

  console.log("[+] GTA VI Rich Presence successfully activated 24/7!");
});

bot.on("error", (err) => {
  console.error("[-] Error:", err);
});

bot.connect();

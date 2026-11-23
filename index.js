// Copyright (c) ahadgpt. All rights reserved.
const Eris = require("eris");
const keep_alive = require("./keep_alive.js");

// Settings
const STATUS = process.env.STATUS || "online"; // 'online', 'idle', 'dnd'
const GAME_NAME = process.env.GAME_NAME || "FiveM";

// Replace TOKEN with your account token in environment variables
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`[+] Logged in as: ${bot.user.username}`);

  // Set Playing Activity
  bot.editStatus(STATUS, {
    name: GAME_NAME,
    type: 0 // 0 = Playing
  });

  console.log(`[+] Status set: [${STATUS}] Playing ${GAME_NAME}`);
});

bot.on("error", (err) => {
  console.error("[-] Error:", err);
});

bot.connect();

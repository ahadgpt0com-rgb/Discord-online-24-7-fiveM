// Copyright (c) ahadgpt. All rights reserved.
const Eris = require("eris");
const keep_alive = require("./keep_alive.js");

// Configurable presence settings (matches your screenshot by default)
const STATUS = process.env.STATUS || "idle"; // Options: 'online', 'idle', 'dnd'
const GAME_NAME = process.env.GAME_NAME || "FiveM";
const GAME_DETAILS = process.env.GAME_DETAILS || "Playing Grand Role Play - gta5grand.com";

// Replace TOKEN with your account token in environment variables
const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}`);

  // Set Rich Presence / Now Playing
  bot.editStatus(STATUS, [
    {
      name: GAME_NAME,
      type: 0, // 0 = Playing
      details: GAME_DETAILS,
      state: GAME_DETAILS,
      timestamps: {
        start: Date.now()
      }
    }
  ]);

  console.log(`Presence set: [${STATUS}] Playing ${GAME_NAME} - ${GAME_DETAILS}`);
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();

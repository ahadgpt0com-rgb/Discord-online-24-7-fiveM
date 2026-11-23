// Copyright (c) ahadgpt. All rights reserved.
const { Client } = require("discord.js-selfbot-v13");
const { RichPresence } = require("discord.js-selfbot-rpc");
const keep_alive = require("./keep_alive.js");

const client = new Client({ checkUpdate: false });

const CLIENT_ID = process.env.CLIENT_ID || "884374609527455764";

client.on("ready", async () => {
  console.log(`[+] Successfully logged in as: ${client.user.tag}`);

  try {
    const presence = new RichPresence()
      .setApplicationId(CLIENT_ID)
      .setType("PLAYING")
      .setName("Grand Theft Auto VI")
      .setDetails("Grand Theft Auto VI")
      .setState("Exploring Vice City...")
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage("gta6_logo")
      .setAssetsLargeText("GTA VI - Next Gen Experience")
      .setAssetsSmallImage("online_icon")
      .setAssetsSmallText("Online in Vice City")
      .setStatus("online"); // 'online', 'idle', 'dnd'

    client.user.setPresence(presence.toData());
    console.log("[+] GTA VI Rich Presence successfully activated!");
  } catch (error) {
    console.error("[-] Error setting presence:", error);
  }
});

// Replace TOKEN with your account token in environment variables
const token = process.env.token;

if (!token) {
  console.error("[-] ERROR: Discord token is missing in environment variables!");
} else {
  client.login(token).catch((err) => {
    console.error("[-] Login failed. Check your token:", err.message);
  });
}

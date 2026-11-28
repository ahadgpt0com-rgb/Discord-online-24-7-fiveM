// Copyright (c) ahadgpt. All rights reserved.
const { Client } = require("discord.js-selfbot-v13");
const { RichPresence, Util } = require("discord.js-selfbot-rpc");
const keep_alive = require("./keep_alive.js");

const client = new Client({ checkUpdate: false });

const CLIENT_ID = process.env.CLIENT_ID || "884374609527455764";

client.on("ready", async () => {
  console.log(`[+] Successfully logged in as: ${client.user.tag}`);

  try {
    let largeImage = "gta6_logo";
    let smallImage = "online_icon";

    // Attempt to resolve asset IDs safely if available
    try {
      const fetchedLarge = await Util.getAssets(CLIENT_ID, "gta6_logo");
      if (fetchedLarge && fetchedLarge.id) largeImage = fetchedLarge.id;
    } catch (e) {}

    try {
      const fetchedSmall = await Util.getAssets(CLIENT_ID, "online_icon");
      if (fetchedSmall && fetchedSmall.id) smallImage = fetchedSmall.id;
    } catch (e) {}

    const presence = new RichPresence()
      .setStatus("online")
      .setApplicationId(CLIENT_ID)
      .setType("PLAYING")
      .setName("Grand Theft Auto VI")
      .setDetails("Grand Theft Auto VI")
      .setState("Exploring Vice City...")
      .setAssetsLargeImage(largeImage)
      .setAssetsLargeText("GTA VI - Next Gen Experience")
      .setAssetsSmallImage(smallImage)
      .setAssetsSmallText("Online in Vice City")
      .setTimestamp();

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

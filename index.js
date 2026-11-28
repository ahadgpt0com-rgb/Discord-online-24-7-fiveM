// Copyright (c) ahadgpt. All rights reserved.
const { Client } = require("discord.js-selfbot-v13");
const { RichPresence, Util } = require("discord.js-selfbot-rpc");
const keep_alive = require("./keep_alive.js");

const client = new Client({ checkUpdate: false });

// 1st code-er Client ID default hisebe set kora hoyeche
const CLIENT_ID = process.env.CLIENT_ID || "1561295851542806570";
const startTimestamp = Date.now();

async function setGTA6Presence(largeImage = "gta6_logo", smallImage = "vice_icon") {
  try {
    const presence = new RichPresence(client)
      .setStatus("online")
      .setApplicationId(CLIENT_ID)
      .setType("PLAYING")
      .setName("Grand Theft Auto VI")
      .setDetails("Playing on PlayStation • Grand Theft Auto VI")
      .setState("Vice City • State of Leonida")
      .setAssetsLargeImage(largeImage)
      .setAssetsLargeText("Grand Theft Auto VI")
      .setAssetsSmallImage(smallImage)
      .setAssetsSmallText("3x Streak • Trending")
      .setStartTimestamp(startTimestamp);

    client.user.setPresence(presence.toData());
  } catch (error) {
    console.error("[-] Failed to update GTA VI RPC:", error);
  }
}

client.on("ready", async () => {
  console.log(`[+] Successfully logged in as: ${client.user.tag}`);

  let largeImage = "gta6_logo";
  let smallImage = "vice_icon";

  // Developer Portal-er asset ID resolve kora (jodi thake)
  try {
    const fetchedLarge = await Util.getAssets(CLIENT_ID, "gta6_logo");
    if (fetchedLarge && fetchedLarge.id) largeImage = fetchedLarge.id;
  } catch (e) {}

  try {
    const fetchedSmall = await Util.getAssets(CLIENT_ID, "vice_icon");
    if (fetchedSmall && fetchedSmall.id) smallImage = fetchedSmall.id;
  } catch (e) {}

  // Prothombar presence set kora
  await setGTA6Presence(largeImage, smallImage);
  console.log("[+] GTA VI Rich Presence successfully activated!");

  // Proti 30 second-e presence auto-refresh
  setInterval(() => {
    setGTA6Presence(largeImage, smallImage);
  }, 30 * 1000);
});

// Environment variable theke account token neya
const token = process.env.token;

if (!token) {
  console.error("[-] ERROR: Discord token is missing in environment variables!");
} else {
  client.login(token).catch((err) => {
    console.error("[-] Login failed. Check your token:", err.message);
  });
}

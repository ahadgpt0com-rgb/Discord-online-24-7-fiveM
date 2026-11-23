const RPC = require("discord-rpc");

// আপনার Discord Developer Portal থেকে নেওয়া Application Client ID
const clientId = "1561295851542806570";

// নতুন ভার্সনগুলোতে scope সাধারণত ['rpc'] বা ডিফল্ট থাকে
const rpc = new RPC.Client({ transport: "ipc" });

const startTimestamp = Date.now();

async function setGTA6Presence() {
  try {
    await rpc.setActivity({
      details: "Playing on PlayStation • Grand Theft Auto VI",
      state: "Vice City • State of Leonida",
      startTimestamp,
      largeImageKey: "gta6_logo",          // Developer Portal-এ আপলোড করা ছবির Key
      largeImageText: "Grand Theft Auto VI",
      smallImageKey: "vice_icon",          // ঐচ্ছিক ছোট আইকনের Key
      smallImageText: "3x Streak • Trending",
      instance: false,
    });
  } catch (err) {
    console.error("Failed to update GTA VI RPC:", err);
  }
}

rpc.on("ready", () => {
  console.log(`Logged in as ${rpc.user.username}! GTA VI RPC is active.`);
  setGTA6Presence();

  // প্রতি ৩০ সেকেন্ডে আপডেট রাখা নিরাপদ (rate limit এড়াতে)
  setInterval(setGTA6Presence, 30 * 1000);
});

rpc.login({ clientId }).catch((err) => {
  console.error("Could not connect to Discord RPC:", err);
});

// Copyright (c) ahadgpt. All rights reserved.
const RPC = require("discord-rpc");

// আপনার ডেভেলপার পোর্টাল থেকে কপি করা Client ID
const clientId = "884374609527455764";

// RPC ক্লায়েন্ট রেজিস্টার ও ইনিশিয়ালাইজ করা
RPC.register(clientId);
const rpc = new RPC.Client({ transport: "ipc" });

// টাইমারের জন্য শুরুর সময়
const startTimestamp = new Date();

async function setActivity() {
  if (!rpc) return;

  rpc.setActivity({
    details: "Grand Theft Auto VI",             // প্রধান গেমের নাম বা স্ট্যাটাস
    state: "Exploring Vice City...",             // নিচের লাইন (Details-এর নিচে)
    startTimestamp: startTimestamp,              // গেম কতক্ষণ ধরে চলছে (টাইমার)
    largeImageKey: "gta6_logo",                  // ডেভেলপার পোর্টাল থেকে আপলোড করা ছবির অ্যাসেট কি
    largeImageText: "GTA VI - Next Gen Experience", // ছবির ওপর কার্সর নিলে যা ভেসে উঠবে
    smallImageKey: "online_icon",                 // ছোট আইকন (যদি থাকে)
    smallImageText: "Online in Vice City",
    instance: false
  });
}

rpc.on("ready", () => {
  console.log("GTA VI Custom RPC successfully connected! Press Ctrl+C to exit.");
  
  // প্রথমবার স্ট্যাটাস সেট করা
  setActivity();

  // প্রতি ১৫ সেকেন্ড পরপর স্ট্যাটাস রিফ্রেশ
  setInterval(() => {
    setActivity();
  }, 15000);
});

// কানেক্ট করা
rpc.login({ clientId }).catch(console.error);

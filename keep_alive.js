// Copyright (c) ahadgpt. All rights reserved.
const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        status: "ok",
        message: "I'm alive",
        uptimeSeconds: Math.floor(process.uptime()),
      })
    );
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("I'm alive");
});

server.on("error", (err) => {
  console.error("[-] Keep-alive server error:", err.message);
});

server.listen(port, () => {
  console.log(`[+] Keep-alive server running on port ${port}`);
});

module.exports = server;

// Copyright (c) ahadgpt. All rights reserved.
const http = require("http");

const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("I'm alive");
  res.end();
}).listen(port, () => {
  console.log(`Keep-alive server running on port ${port}`);
});

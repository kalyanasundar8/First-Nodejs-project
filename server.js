const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/spider-man":
      path += "spider.html";
      res.statusCode = 200;
      break;
    case "/spider-man":
      res.statusCode = 301;
      res.setHeader("loaction", "/spider");
      res.end();
      break;
    default:
      path += "killed.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);

      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening port 3000");
});

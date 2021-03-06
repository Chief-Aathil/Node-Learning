const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >Send</button></input></form><body>'
    );
    res.write("</html>");
    res.end();
    return;
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log({ chunk });
      body.push(chunk);
    });
    return req.on("end", () => {
      //executed once all chunks are received
      const parsedBody = Buffer.concat(body).toString();
      console.log({ parsedBody });
      const message = parsedBody.split("=")[1]; //split into substring and return in element at index 1
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; //redirection
        res.setHeader("Location", "/");
        res.end();
        return;
      });
    });
  }

  /*
This code will be executed before the req.on('end') code.
This will raise an error when res.setHeader() tries to set Header after the 
respone has already been sent.
Now the below code will not be executed if the above if-block is true.
*/
  console.log("here");
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js server</h1></body>");
  res.write("</html>");
  res.end();
};

/*Different ways to export*/
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text",
// };
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';
exports.handler = requestHandler;
exports.someText='Some hard coded text';
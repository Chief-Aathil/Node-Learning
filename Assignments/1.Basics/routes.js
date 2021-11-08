const reqHandler = (req, res) => {
  console.log("inside reqHandler()");
  const url = req.url;
  console.log({ url });

  if (url === "/") {
    res.write("<head><title>First page</title></head>");
    res.write("<body><h1>  Greetings !!!</h1>");
    res.write("<form action='/create-user' method=POST>");
    res.write("<input name='username' type='text'>");
    res.write("<button type='submit'>Send</button></ form>");
    res.write("</body></html>");
    res.end();
    return;
  }
  if (url === "/users") {
    res.write("<head><title>User page</title></head>");
    res.write("<body>");
    res.write("<ul><li>User1</li><li>User2</li></ul>");
    res.write("</body > ");
    res.write("</html>");
    res.end();
    return;
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      console.log({ chunk });
      body.push(chunk);
    });
    req.on('end', () => {
      let reqBody = Buffer.concat(body).toString();
      console.log({ reqBody });
      res.statusCode = 302; //redirection
      res.setHeader("Location", "/");
      res.end();
      console.log("redirecting to '/'");
      return;
    })
  }
};

exports.handler = reqHandler;

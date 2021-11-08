const reqHandler = (req, res) => {
  console.log("inside reqHandler()");
  const url = req.url;
  if (url == "/") {
    res.write("<head><title>First page</title></head>");
    res.write("<body><h1>  Greetings !!!</h1>");
    res.write("<form>");
    res.write("</body></html>");
    res.end();
    return;
  }
  if (url == "/users") {
    res.write("<head><title>User page</title></head>");
    res.write("<body>");
    res.write("<ul><li>User1</li><li>User2</li></ul>");
    res.write("</body > ");
    res.write("</html>");
    res.end();
    return;
  }
};

exports.handler = reqHandler;

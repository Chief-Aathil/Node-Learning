const reqHandler = (req, res) => {
  console.log("inside reqHandler()");
  console.log(req.url);
};

exports.handler = reqHandler;

function startServer() {
  console.log("Request handler 'startServer' was called");
  return "Whats up start";
}

function upload() {
  console.log("Request handler 'upload' was called");
  return "Here comes the upload";
}

exports.startServer = startServer;
exports.upload = upload;

function startServer() {
  console.log("Request handler 'startServer' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}

exports.startServer = startServer;
exports.upload = upload;

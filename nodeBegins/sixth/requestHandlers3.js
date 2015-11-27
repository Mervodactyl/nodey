var exec = require("child_process").exec;

function startServer(response) {
  console.log("Request handler 'startServer' was called");

  exec("ls -lah", function(error, stdout, stderr) {
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, { "Content-Type" : "text/plain" });
  response.write("Hello Mrs upload");
  response.end();
}

exports.startServer = startServer;
exports.upload = upload;

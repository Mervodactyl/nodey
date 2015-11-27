function route(handle, pathname, response) {
  console.log("About to Route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname](response);
  } else {
    console.log("No Request handler found for " + pathname);
    response.writeHead(200, { "Content-Type" : "text/plain" });
    response.write("404 nothing to see here folks");
    response.end();
  }
}

exports.route = route;

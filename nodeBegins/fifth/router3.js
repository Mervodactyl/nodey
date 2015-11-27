function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname]();
  } else {
    console.log("Oops! No Request handler found for " + pathname);
    return "404 nothing to see here";
  }
}

exports.route = route;

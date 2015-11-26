var Parser = require("./parser");
var fs = require("fs"); // load file system module

fs.readFile("example_log.txt", function (err, logData) { // read file contents and file into memory
  if (err) throw err; // if an error occurred throwing it will display the exception and end the app
  var text = logData.toString();// logData is a Buffer - a byte array basically, then convert to string
  var parser = new Parser();

console.log(parser.parse(text));
  // { A: 2, B: 14, C: 6 }
});

// adds the values for each letter from the text file (eg. all the "B's added together = 14")

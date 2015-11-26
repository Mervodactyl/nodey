var fs = require("fs"); // load file system module

fs.readFile("example_log.txt", function (err, logData) { // read file contents and file into memory
  if (err) throw err; // if an error occurred throwing it will display the exception and end the app
  var text = logData.toString();// logData is a Buffer - a byte array basically, then convert to string

var results = {};

  var lines = text.split("\n"); // break the file into lines

lines.forEach(function(line) { // for each line:
  var parts = line.split(" "); // break with " "
  var letter = parts[1]; //
  var count = parseInt(parts[2]); //

if(!results[letter]) {
  results[letter] = 0; // if no letter log '0' in its place
}

results[letter] += parseInt(count); // Letter + all that letter's total value
  });

console.log(results);
  // { A: 2, B: 14, C: 6 }
});

// adds the values for each letter from the text file (eg. all the "B's added together = 14")

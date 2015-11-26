var Parser = function() {

};

Parser.prototype.parse = function(text) { // parses the specified text

var results = {};

  var lines = text.split("\n");

lines.forEach(function(line) {
  var parts = line.split(" ");
  var letter = parts[1];
  var count = parseInt(parts[2]);

if(!results[letter]) {
    results[letter] = 0;
  }

results[letter] += parseInt(count);
});

return results;
};

module.exports = Parser; // this tells node what you are exporting, aka the constructor, so instances of the Parser object can be created


// this file holds the logic for parsing logs using a JS object

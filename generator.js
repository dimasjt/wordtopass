var alphabet = require('./alphabet');

var exports = module.exports = {};

var random = function(length){
  return Math.floor(Math.random() * length) || 0
}

var generate = function(str) {
  var generatedPassword = '';
  var chars = str.toLowerCase().split('');

  for(i = 0; i < chars.length; i++) {
    var char = chars[i];

    if (char == ' ') {
      var charSpaces = ['-', '_', '.'];
      var pass =  charSpaces[random(2)];
    } else {
      var arrayPass = alphabet[char];
      var pass = arrayPass[random(arrayPass.length)];
    }

    generatedPassword += pass;
  }

  return generatedPassword;
}

exports.generate = generate;

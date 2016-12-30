var prompt = require('prompt');

var generator = require('./generator');

prompt.start();

var schema = {
  properties: {
    password: {
      type: 'string',
      pattern: /^[a-zA-Z0-9\s\-]+$/,
      message: 'Only allow letters, numbers and spaces',
      description: 'Enter the word you want to generate',
      required: true
    }
  }
}

prompt.get(schema, function(err, result) {
  var generatedPassword = generator.generate(result.password)

  console.log('Generated password :', generatedPassword)
})

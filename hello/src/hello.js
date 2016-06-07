'use strict';
console.log('Loading event');
            
exports.handler = function(event, context) {
  var name = (event.name === undefined ? 'No-Name' : event.name);
  console.log('"Hello":"' + name + '"');
  context.done(null, {"hello":name}); // SUCCESS with message
};

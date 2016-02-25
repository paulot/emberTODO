/* jshint ignore:start */

define('todo-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'todo-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("todo-app/app")["default"].create({"name":"todo-app","version":"0.0.0+bde005e1"});
}

/* jshint ignore:end */

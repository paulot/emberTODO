define('todo-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'todo-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _todoAppConfigEnvironment) {

  var name = _todoAppConfigEnvironment['default'].APP.name;
  var version = _todoAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
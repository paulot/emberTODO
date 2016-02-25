define('todo-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'todo-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _todoAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_todoAppConfigEnvironment['default'].APP.name, _todoAppConfigEnvironment['default'].APP.version)
  };
});
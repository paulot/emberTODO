define('todo-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'todo-app/config/environment'], function (exports, _emberResolver, _todoAppConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _todoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _todoAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
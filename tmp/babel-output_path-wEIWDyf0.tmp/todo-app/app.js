define('todo-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'todo-app/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _todoAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _todoAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _todoAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _todoAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
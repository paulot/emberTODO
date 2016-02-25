define('todo-app/router', ['exports', 'ember', 'todo-app/config/environment'], function (exports, _ember, _todoAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _todoAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('todos');
  });

  exports['default'] = Router;
});
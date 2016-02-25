define('todo-app/routes/todos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return [{ text: 'Create Ember App' }, { text: 'Read Ember Ignite' }, { text: 'Master Ember' }];
    }
  });
});
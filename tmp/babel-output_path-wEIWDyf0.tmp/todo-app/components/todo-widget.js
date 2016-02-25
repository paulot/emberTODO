define('todo-app/components/todo-widget', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      addTodo: function addTodo(text) {
        this.get('todos').pushObject({ text: text });
      }
    }

  });
});
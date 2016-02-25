define('todo-app/components/add-todo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      submit: function submit() {
        var text = this.get('text');
        this.get('onAdd')(text);
        this.set('text', '');
        this.$('input').focus();
      }
    }
  });
});
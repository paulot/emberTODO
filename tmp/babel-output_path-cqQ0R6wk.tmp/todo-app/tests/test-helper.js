define('todo-app/tests/test-helper', ['exports', 'todo-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _todoAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_todoAppTestsHelpersResolver['default']);
});
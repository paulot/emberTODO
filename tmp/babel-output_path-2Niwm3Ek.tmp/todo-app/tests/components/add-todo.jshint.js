define('todo-app/tests/components/add-todo.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/add-todo.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/add-todo.js should pass jshint.\ncomponents/add-todo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/add-todo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/add-todo.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/add-todo.js: line 6, col 7, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
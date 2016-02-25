define('todo-app/tests/components/todo-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/todo-widget.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/todo-widget.js should pass jshint.\ncomponents/todo-widget.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/todo-widget.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/todo-widget.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});
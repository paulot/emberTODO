QUnit.module('JSHint - routes');
QUnit.test('routes/todos.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'routes/todos.js should pass jshint.\nroutes/todos.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/todos.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/todos.js: line 4, col 3, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/todos.js: line 9, col 6, Missing semicolon.\n\n4 errors'); 
});

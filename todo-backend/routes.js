// routes.js
'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
const todos = require('./handlers/todos')

module.exports = function (app, opts) {
  app.get('/', simple)
  app.get('/configured', configured(opts))
  
  // Todo ендпоинты
  app.get('/api/todos', todos.getTodos)
  app.post('/api/todos', todos.createTodo)
  app.delete('/api/todos/:id', todos.deleteTodo)
}
"use strict"


const Todo = require('../models/Todo')

// get запрос
exports.getTodos = (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(500).json({error: err.message}))
}

// Post запрос
exports.createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: false
    })
    
    todo.save()
        .then(todo => res.status(201).json(todo))
        .catch(err => res.status(400).json({error: err.message}))
}

// Delete запрос
exports.deleteTodo = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json({message: 'Task deleted'}))
        .catch(err => res.status(500).json({error: err.message}))
}
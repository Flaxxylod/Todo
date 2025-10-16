const mongoose = require('mongoose')

// Объявление таблицы
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Todo', todoSchema, 'todos');
# Todo App

React + Express + MongoDB приложение для управления задачами.

## Требования
- Node.js 16 или выше
- MongoDB (локальная версия)
- npm

## Шаги по запуску проекта

1. Клонировать репозиторий
```bash
git clone https://github.com/Flaxxylod/Todo.git

2. Перейти к корневой папке проекта Todo и устанавливаем зависимости фронтенда:
npm install

3.Переходим в папку todo-backend (cd todo-backend) и устанавливаем зависимости бэкенда:
cd todo-backend
npm install
cd ..


4. Создайте файл `todo-backend/.env` с содержимым:
MONGODB_URI=mongodb://localhost:27017/todoapp
5. Запуск проекта
# Терминал 1 - запуск бэкенда
cd todo-backend
npm start

# Терминал 2 - запуск фронтенда (из корневой папки Todo)
npm run dev

# Shop Management Project

Этот проект представляет собой систему управления товарами с интерфейсом и серверной частью. 

## Структура проекта

- **frontend/**: папка с клиентской частью (React, Next.js).
- **backend/**: папка с серверной частью (NestJS, TypeORM).

Каждая часть проекта имеет свои зависимости и инструкции для настройки.

---

## Установка и настройка

### 1. Клонирование репозитория
Склонируйте проект с GitHub:
### `git clone https://github.com/SnejannaTumanova/Product-app.git`
### `cd Product-app`

### 2. Настройка фронтенда
Перейдите в папку frontend и установите зависимости:
### `cd frontend`
### `npm install`

### Запустите проект в режиме разработки:
### `npm run dev`

### 3. Настройка бэкенда
Перейдите в папку backend и установите зависимости:
### `cd ../backend`
### `npm install`

---

### Работа с базой данных

### 1. Настройка базы данных
Обновите файл ormconfig.json или используйте переменные окружения для подключения к вашей базе данных. Например:
## json
### {
### "type": "postgres",
###  "host": "localhost",
###  "port": 5432,
###  "username": "postgres",
###  "password": "ваш_пароль",
###  "database": "shop",
###  "synchronize": false,
###  "logging": true,
###  "entities": ["src/entity/**/*.ts"],
###  "migrations": ["src/migration/**/*.ts"],
###  "cli": {
###    "migrationsDir": "src/migration"
###  }
### }

### 2. Создание миграций
Для создания миграции выполните команду:
### `npm run typeorm migration:generate -- -n <НазваниеМиграции>`

## Пример:
### `npm run typeorm migration:generate -- -n InitialMigration`

### 3. Запуск миграций
Примените миграции к базе данных:
### `npm run typeorm migration:run`

### 4. Засев данных
Для заполнения таблиц данными выполните команду:
### `npm run seed`

---

### Запуск фронтенда
Фронтенд находится в папке frontend. Для запуска:
### `cd frontend`

### `npm run dev`

### Запуск бэкенда
Бэкенд находится в папке backend. Для запуска:
### `cd backend`

### `npm run start:dev`

---

## Основные команды

### Фронтенд
### `npm run dev` - Запуск в режиме разработки.
### `npm run build` - Сборка проекта для продакшена.
### `npm run start` - Запуск собранного проекта.

### Бэкенд
### `npm run start:dev` - Запуск в режиме разработки.
### `npm run build` - Сборка проекта.
### `npm run start:prod` - Запуск собранного бэкенда.
### `npm run typeorm` - Команда для работы с миграциями.
### `npm run seed` - Засев данных в базу.

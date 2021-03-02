const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todo');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// вызывается прямо перед запуском сервера
app.use((req, res, next) => {
    // папку public мы зделали статической, это означает, что express будет находить файлы из public в корне
    res.sendFile('/index.html');
    }
);

// все запросы будем отсылать по адресу api - запросы для получения данных
app.use('/api/todo', todoRoutes);

app.listen(PORT);
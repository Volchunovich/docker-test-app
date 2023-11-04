const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

/*
HW: 
    Научится использовать докер в плане, что дальше? 
    Что с ним можно делать (с докер образом)?

    Запушить куда-то образ (docker-hub)

    1. Запушить проект в github 
    2. Настроить CI, чтоб он собирал image и пушил его в github registry

    3. Запуск на сервере (пока локально можно поднять)
*/
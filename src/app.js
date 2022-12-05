// Подключаем express
const express = require('express')
// Создаём express приложение
const app = express()
// Назначаем порт
const port = 5000
 
// Отслеживаем get запрос на сервер
app.get('/', (req, res) => {
  // Выводим 
  res.send('Hello World!')
})
// Назначаем слушателя
app.listen(port, () => {
  // Выводим в консоль что всё хорошо
  console.log(`Запуск сервера по адресу http://localhost:${port}`)
})

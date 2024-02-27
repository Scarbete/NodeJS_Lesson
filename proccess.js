const dotenv = require('dotenv') // require - Нужен для импортов && С помощью dotenv мы получаем доступ к env данным
dotenv.config() // config - конфигурация dotenv

console.log(process.pid) // Получени id выполнения таска с списке задач

console.log(process.env.PORT) // С помощью dotenv мы получаем доступ к env данным
console.log(process.env.NODE_ENV)

console.log(process.argv) // process.argv - Получения аргументов с пути файла


// Возможность остановить задачу с помощью process.exit()
if (Math.random() > 0.5) {
    while (true) {

    }
}
else {
    console.log('end')
    process.exit()
}
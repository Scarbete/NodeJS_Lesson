const dotenv = require('dotenv')
const path = require('path')
dotenv.config()


// process
console.log(process.env.PORT)
console.log(process.env.NODE_ENV)
console.log(process.env.TEXT)
console.log(process.argv)

// path
console.log(path.join('one', 'two')) // path.join - Склеивание путей файла
console.log(path.join(__dirname, 'one', 'two')) // __dirname - Получение полной пути до файла
console.log(path.join(__filename, 'one', 'two')) // __filename - Получение полного адреса до файла и название самого файла
console.log(path.resolve(__dirname)) // Получение пути с помощью resolve()
console.log('Парсинг пути и получение его агрументов...', path.parse(__dirname))

// Парсинг адреса и получение его аргументов и селекторов...
const urlPath = 'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=2'
const url = new URL(urlPath)
console.log(url)


const absolutePath = '/Users/admin/Documents/Node/node_course_UlbiTv/lessons/repeat.js/'
const notAbsPath = 'Quasar'

console.log(path.isAbsolute(notAbsPath)
    ? 'yes is isAbsolute path'
    : 'no it`s not isAbsolute path'
)

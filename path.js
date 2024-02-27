const path = require('path') // импорт ( path ) с помощью ( require )

// path.join()
console.log('Склеивание участков пути', path.join('first', 'second', 'third'))

// dirname && filename
console.log('Полный путь до файла: ( dirname ) -', path.join(__dirname))
console.log('Полный путь до файла и название самого файла: ( filename ) -', path.join(__filename))

// '..' && '..'
console.log('Выход из файла: path.join( ".." ) -', path.join(__dirname, '..', '..'))

// path.resolve()
// Если resolve не предсказуем лучше использовать join()
console.log('Полный абсолютный путь до файла -', path.resolve(__dirname, 'first', 'second', 'third'))


// path.parse()
const fullPath = path.join(__dirname, 'first', 'second', 'third')
console.log('Парсинг пути', path.parse(fullPath))

// path.sep
console.log('Разделитель OC', path.sep)

// path.isAbsolute()
const absolutePath = '/Users/admin/Documents/Node/node_course_UlbiTv/lessons/first/second/third'
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second')) // false
console.log('Проверка на абсолютный путь', path.isAbsolute(absolutePath)) // true

// basename && extname
console.log('Название файла', path.basename(fullPath)) // third
console.log('Расширение файла', path.extname(__filename)) // .js


// ----------------------------------------------------------------------------------------------------------- //

const siteUrl = 'http://localhost:8000/users?id=5123'

const url = new URL(siteUrl)

console.log(url)

// То что вывелось в консоль...

// URL {
//     href: 'http://localhost:8000/users?id=5123',
//         origin: 'http://localhost:8000',
//         protocol: 'http:',
//         username: '',
//         password: '',
//         host: 'localhost:8000',
//         hostname: 'localhost',
//         port: '8000',
//         pathname: '/users',
//         search: '?id=5123',
//         searchParams: URLSearchParams { 'id' => '5123' },
//     hash: ''
// }
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

// const dotenv = require('dotenv')
// dotenv.config()

// fs.mkdirSync - Нужен для синхронной создании папок
// fs.mkdirSync(path.resolve(__dirname, 'dir')) // Создание одной папки
// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), { recursive: true }) // Создание папок с помощью рекурсии

// console.log('START')

// fs.mkdir - Поволяет создать папку асинхронно
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log('Произошла ошибка!')
//         return
//     }
//     console.log('Папка создана...')
// })
//
// console.log('END')

// START
// END
// Произошла ошибка!

// То что вывелось в консоль, ( Произошла ошибка! )
// в конце потомучто функция выполнилась в асинхронном режиме



// ( fs.rmdir ) - Для удаления папок
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log('Данной папки не существует!')
//         return
//     }
//     console.log('Папка удалена!')
// })


// fs.writeFile - Функия для создания файла и записи данных,
// но если данный файл существует данные в нем перезапишутся
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Quasar', (err) => {
//     if (err) {
//         console.log('Ошибка!')
//         return
//     }
//     console.log('Файл записан!')
// })


// fs.appendFile - Функция для создания файла и записывания данных,
// но если файл существует данные добавятся в конец
// fs.appendFile(path.resolve(__dirname, 'text.txt'), ' Aesthetic', (err) => {
//     if (err) {
//         console.log('Ошибка!')
//         return
//     }
//     console.log('Файл записан!')
// })

// И на этом моменте возникает вопрос какая из них вызовется быстрее так как оба из низ асинхронные,
// чтобы мы явно знали какой выполнится после мы можем записать appendFile внутри writeFile
// но здесь возникает проблема ( Hell CallBack )
// fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Quasar', (err) => {
//     if (err) {
//         console.log('Ошибка!')
//         return
//     }
//     console.log('Файл записан!')
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), ' Aesthetic', (err) => {
//         if (err) {
//             console.log('Ошибка!')
//             return
//         }
//         console.log('Файл записан!')
//         fs.appendFile(path.resolve(__dirname, 'text.txt'), ' Aesthetic', (err) => {
//             if (err) {
//                 console.log('Ошибка!')
//                 return
//             }
//             console.log('Файл записан!')
//         })
//     })
// })


// 'fs/promises' - Решение для Hell CallBack в Promise
// const fsPromise = require('fs/promises')

// fsPromise.mkdir('/').then().catch()
// fsPromise.readFile('/').then().catch()
// fsPromise.writeFile('/').then().catch()
// fsPromise.appendFile('/').then().catch()
// fsPromise.rm('/').then().catch()
// fsPromise.rmdir('/').then().catch()

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    // return new Promise((resolve, reject) => fs.readFile(path, (err, data) => { // Без кодировки
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}


// Оптимизация кода будет выглядеть таким образом...
// const myPath = path.resolve(__dirname, 'text.txt')

// writeFileAsync(myPath, 'Quasar')
//     .then(() => appendFileAsync(myPath, ' 123'))
//     .then(() => appendFileAsync(myPath, ' 456'))
//     .then(() => appendFileAsync(myPath, ' 789'))
//     .then(() => readFileAsync(myPath))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Удаление файла
// removeFileAsync(myPath)
//     .then(() => console.log('Файл удален!'))


// Задача...
// Через переменную окружения передать строку, записать ее в файл
// Прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt затем удалить первый


const text = process.env.TEXT || ''

console.log(text)

const textFile = path.resolve(__dirname, 'text.txt')
const countFile = path.resolve(__dirname, 'count.txt')

writeFileAsync(textFile, text)
    .then(() => readFileAsync(textFile))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(countFile, `Кол-во слов ${count}`))
    .then(() => removeFileAsync(textFile))

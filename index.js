const crypto = require('crypto')

const start = Date.now()

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('1 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('2 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('3 end', Date.now() - start)
})

crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('4 end', Date.now() - start)
})

// пятый выбивается из потока потомучто у Libuv имеется 4 потока,
// пятую задачу берет тот поток который первым завершил свою работу
crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
    console.log('5 end', Date.now() - start)
})
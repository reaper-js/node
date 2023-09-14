const fs = require('fs')
//const book = {
//title:'Da Vinci Code',
//author: 'Dan Brown'
//}
//
//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)



const dataBuffer = fs.readFileSync('1-json.json')
const user = JSON.parse(dataBuffer.toString())
console.log(user)
user.name = 'Bobsled'
user.age = 22
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
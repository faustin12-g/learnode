import fs from 'fs/promises'
import path from 'path'

// synchronous version

// console.log('start')
// const data = fs.readFileSync('test.txt')
// console.log(data.toString())
// console.log('End')

// async version
// console.log('start')
// fs.readFile('test.txt', (err, data)=>{
//     console.log(data.toString())
// })
// console.log('end')

// const data = await fs.readFile('test.txt', 'utf8')
// console.log(data)


// fs.readFile('test.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// writing a file

// fs.writeFile('notes.txt', 'Hello World', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.appendFile('notes.txt', '\n New Line file', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })


// deleting a file

// fs.unlink('notes.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })


// renaming a file

// fs.rename('notes.txt', 'mine.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.mkdir('faustin', (err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
// })

// fs.mkdir('user/name/mine',{recursive:true})

// fs.rmdir('user/name/mine')




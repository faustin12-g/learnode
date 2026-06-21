import fs from 'node:fs'

fs.readFile('mine.txt', 'utf8', ()=>{
    setTimeout(()=>{console.log('Timeout')})
})
fs.readFile('mine.txt', 'utf8', ()=>{
    setImmediate(()=>{console.log('Immediate')})
})
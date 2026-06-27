import express from 'express'
import morgan from 'morgan'


const app = express()

app.use((req, res, next)=>{
    console.log(req.method, req.url)
    next()
})

app.use(morgan('dev'))

app.get('/',(req, res)=>{
    res.send('<HTML>Hello Morgan</HTML>')
    
})

app.listen(3000,()=>{
    console.log('app is listening to http://localhost:3000')
})
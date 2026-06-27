import express from 'express'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.post('/users', (req, res)=>{
    const {name, age} = req.body
    res.send({
        received:
        name,
        age
    })
    console.log(res.json())
    
})

app.listen(3000,()=>{
    console.log('App is listening on 3000 port')
})
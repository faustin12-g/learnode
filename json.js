import express from 'express'

const app = express()

app.use(express.json())

app.post('/student',(req, res)=>{
    const {name, age} = req.body

    res.json({
        received:{
            name,
            age
        }
    })
})


app.listen(3000,()=>{
    console.log('app is listening on 3000')
})
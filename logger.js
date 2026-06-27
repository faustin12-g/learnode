import express from 'express'

const app = express()

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})


app.get('/', (req, res)=>{
    res.send("<HTML>Home page</HTML>")
})

app.listen(3000, () =>{
    console.log('App is listening to 3000')


});
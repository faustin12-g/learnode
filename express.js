import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.send('<html><h1>Hello there</h1></html>')
})

app.get('/api/user', (req, res)=>{
    res.json({
        name: 'Faustin',
        role: 'Student'
    })
})

app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.use(express.json());

app.post('/users', (req, res)=>{
    res.json({
        message: 'user received',
        data: req.body
    });
});

app.get('/search', (req, res)=>{
    const {q, page} = req.query
    res.json({query: q, page: Number(page)})
})

app.listen(3000,()=>{
    console.log('server is listening to http://localhost:3000')
})
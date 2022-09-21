import express from 'express'
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    console.log('Hello World! from my computer: '+ req.ip);
  res.send('Hello World! from my computer: '+ req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
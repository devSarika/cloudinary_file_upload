const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();
const port = 3000


mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/user', require('./routes/user'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
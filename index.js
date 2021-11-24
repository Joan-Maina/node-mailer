require('dotenv').config()
const express = require('express')

const mailRoute = require('./routes')
const app = express();
app.use(express.json())
const PORT = process.env.PORT
app.use('/sendemail', mailRoute )

app.listen(PORT, ()=>{
  console.log(`server started on ${PORT}`);
})

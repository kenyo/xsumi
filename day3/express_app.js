const express = require('express')
const app = express()
const fs = require('fs')

// with each request that comes in we want to log the time in a file
// on the file system of the server

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/data', (req, res, next) => {
  const date = new Date()
  const path = 'day3/data.txt'
  // create and write to appendFile
  fs.appendFile(path,  `Date: ${date} \n`, () => {
    next()
  })
  // optionally: create and write file synchronously
  fs.appendFileSync(path, `Date: ${date} \n`)
  next()
})


// test for yourself by running `curl localhost:3000` in terminal
app.listen(3000, () => console.log('Example app listening on port 3000!'))

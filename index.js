const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send('i know how to open node')
})

app.listen(4200, () => console.log("listening to part 4200"))
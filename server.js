const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to my services')
})

//Start server
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server lisnening on port ${8080}`)
})
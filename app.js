const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/hi', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    const cdx = {
        'name': 'Joel',
        'last': 'Reyes'
    }
    res.render('test', cdx)
})

app.get('*', (req, res) => {
    res.send('Error 404. Page not found.')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public3'))

app.get('/', (req, res) => {
    res.render('home3', {
        // nombre: 'William Chiroy',
        // titulo: 'Curso Node Dessarrollo-Web'
    })
})


app.get('/generic', (req, res) => { 
    res.render('generic', {
        // nombre: 'William Chiroy',
        // titulo: 'Curso Node Dessarrollo-Web'
    })
})

app.get('/elements', (req, res) => { 
    res.render('elements', {
        // nombre: 'William Chiroy',
        // titulo: 'Curso Node Dessarrollo-Web'
    })
})

app.get('/proyectosEst', (req, res) => { 
    res.render('proyectosEst', {
        // nombre: 'William Chiroy',
        // titulo: 'Curso Node Dessarrollo-Web'
    })
})

app.get('/contacto', (req, res) => { 
    res.render('contacto', {
        // nombre: 'William Chiroy',
        // titulo: 'Curso Node Dessarrollo-Web'
    })
})

app.get('/generic', (req, res) => { 
    res.sendFile(__dirname + '/public3/generic.html')
})

app.get('/elements', (req, res) => { 
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('/proyectosEst', (req, res) => { 
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('/contacto', (req, res) => { 
    res.sendFile(__dirname + '/public3/elements.html')
})

app.get('*', (req, res) => { 
    res.sendFile(__dirname + '/public/404.html')

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const html = require('html')
const path = require('path')
const express = require('express')
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'html')

app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.render('index')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            "error": "You must provide an address!"
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude,forecastData => {
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
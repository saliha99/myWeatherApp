const request = require('request')

const forecast = (latitude, longitude,callback) => {

    const url="https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=294e33d0b03b099919a282a7feb7ff87"

    request({ url: url, json: true }, (error,{body}) => {

        if (error) {

            callback('Unable to connect to weather service!', undefined)

        } else if (!body.name) {

            callback('Unable to find location', undefined)
        } 
        else{
            callback("Today the weather is "+ body.weather[0].description +" today. It is currently " + body.main.temp + " degrees out.",undefined)
        }
    })
}
module.exports = forecast
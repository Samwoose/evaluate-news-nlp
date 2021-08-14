var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
//Fetch testing purpose 
const urlToAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + "1296cfc39715b59ddddbeafd3046742f" + "&url=" + "https://www.usatoday.com/restricted/?return=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fnews%2Fpolitics%2F2021%2F08%2F14%2Ftalibans-afghanistan-advance-tests-bidens-america-back-policy%2F8121040002%2F" + "&lang=en"

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//test purpose
app.post('/nlp-api', async function(req,res){
    console.log(urlToAPI)
    const response = await fetch(urlToAPI)
    try{
        const data = await response.json()
        console.log(data)
        res.send(data)
    }catch(error){
        console.log("Something went wrong",error)
    }
})
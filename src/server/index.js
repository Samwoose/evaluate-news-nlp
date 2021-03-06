var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
//Call API key from .env file 
const dotenv = require('dotenv')
dotenv.config()

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


projectData = {};
app.get('/nlp-api', async function(req,res){
    if(userUrlInput != ""){
        const urlToAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + userUrlInput + "&lang=en"
        const response = await fetch(urlToAPI)
        try{
            const data = await response.json()
            const newEntry = {
                model : data.model,
                confidence : data.confidence,
                agreement : data.agreement,
                irony : data.irony,
                subjectivity : data.subjectivity,
            }
            //Assign the new entry to the object
            projectData = newEntry ;
            res.send(projectData);
        }catch(error){
            console.log("Something went wrong",error)
        }
    }
    else{
        console.log("Please provide url that contains an article you want to analyze.")
    }
})

let userUrlInput = ""
app.post('/update-url',(req,res)=>{
    userUrlInput = req.body.userUrl ;
    console.log(`This is ${userUrlInput}`)
})
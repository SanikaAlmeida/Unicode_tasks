const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json()); //middleware to parse json data

app.post('/flashcard', function(req, res) {   //endpoint to implement post request
    const word = req.body.word;        //obtain the word entered in the user body
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)   //fetch the data
    .then(response => response.json())
    .then(data => {
        res.json(data);             //send json response
    })
    .catch(error => {
        console.log('Error fetching data:', error);
        res.status(500).send("Error while fetching data");
    });
});

app.listen(9000, function() {
    console.log("Running");
});

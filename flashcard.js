const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json()); 

app.post('/flashcard', function(req, res) {
    const word = req.body.word;
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
        res.send("Error while fetching data");
    });
});

app.listen(9000, function() {
    console.log("Running");
});

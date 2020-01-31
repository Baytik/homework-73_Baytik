const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
   res.send('Enter Text')
});

app.get('/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(port);
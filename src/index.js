const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Maratona Full Cycle 2.0'));

app.listen(3000);
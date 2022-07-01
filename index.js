const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParse = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParse.json());

const { PORT } = process.env;

const port = PORT;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

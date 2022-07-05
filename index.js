const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParse = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParse.json());

const { PORT } = process.env;

app.get('/', (_req, res) => res.send('Hello World!'));

app.use(routes.removeTaskRouter);

app.use(routes.getAllTaskRouter);

app.use(routes.insertTaskRouter);

app.listen(PORT, () => console.log(`App runing in port: ${PORT}!`));

const express = require('express');
const cors = require('cors');

const aluninhos = require('./src/routes/alunos');

const app = express();
app.use(express.json());
app.use(cors());
app.use(aluninhos);

app.listen(3000, () => {
    console.log("taokei");
});
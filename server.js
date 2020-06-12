const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require('require-dir');


//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    "mongodb://192.168.99.100:27017/nodeapi",
    { useUnifiedTopology: true },
);

requireDir("./src/models");

app.use('/api' , require("./src/routes"));

app.listen(3001);
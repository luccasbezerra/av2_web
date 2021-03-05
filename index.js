const express = require('express');

const bodyParser = require('body-parser');

const livro = require('./routes/livro.route');
const app = express();

const mongoose = require('mongoose');
let url = 'mongodb://localhost:27017/DesenvolvimentoWeb';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/livro', livro);

let port = 8000;
app.listen(port, () => {
    console.log('Servidor em execução na porta ' + port);
});
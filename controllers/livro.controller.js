var Livro = require('../models/livro.model');

exports.create = function (req, res) {
    console.log(req.body)
    let livro = new Livro({
        nomeLivro: req.body.nomeLivro,
        autor: req.body.autor,
        editora: req.body.editora,
        dataLancamento: Date.parse(req.body.dataLancamento),
        volume: parseInt(req.body.volume),
        isbn: parseInt(req.body.isbn)});

    livro.save().then((data)=> {
        console.log(data);
        res.send('Registo de Livro criado com sucesso')
    }).catch((err)=> {
        console.log(err);
    })
};

exports.read = function (req, res) {
    Livro.findOne({isbn: parseInt(req.params.isbn)}, function (err, livro) {
        if (err) return err;
            res.send(livro);
    })  
};


exports.update = function (req, res) {
    Livro.findOne({isbn: parseInt(req.body.isbn)}, function (err, livro) {
        if (err) return err;
            livro.nomeLivro = req.body.nomeLivro;
            livro.autor = req.body.autor;
            livro.editora = req.body.editora;
            livro.dataLancamento = Date.parse(req.body.dataLancamento);
            livro.volume = parseInt(req.body.volume);

            livro.save()
            res.send(livro);
    })
};

exports.delete = function (req, res) {
    console.log(req.params)
    Livro.findOneAndRemove({isbn: parseInt(req.params.isbn)}, function (err) {
        if (err) return err;
        else res.send('Livro Deletado')
    })
};


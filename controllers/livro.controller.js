var Livro = require('../models/livro.model');

exports.read = function (req, res) {
    Livro.findOne({isbn: parseInt(req.params.isbn)}, function (err, livro) {
        if (err) return err;
            res.send(livro);
    })
};


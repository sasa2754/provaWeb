const problema = require('../model/problema');

module.exports = {
    async chamadoInsert(req, res) {
        const dados = req.body;

        await problema.create({
            NomePessoa: dados.nome,
            Descricao: dados.descricao,
            Tipo: dados.tipo
        });
        res.redirect('/');
    },

}
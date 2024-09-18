const chamado = require('../model/problema');

module.exports = {
    async pagInicialGet(req, res) {

        const chamados = await chamado.findAll({
            raw: true,
            atributes: ['IDChamado', 'NomePessoa', 'Descricao', 'Tipo'],
        });

        res.render('../views/index', {chamados});
    },

    async apagarChamados(req, res) {
       
            await chamado.truncate();

        res.redirect('/');
    },

    async apagarExclusivo(req, res) {
        const id = req.params.id;

        chamado.destroy({
            where: {
                IDChamado: id,
            },
        });
    
        res.redirect('/');
    },

    async editar(req, res) {
        const dados = req.body;
        const id = req.params.id;

        await chamado.update({
            IDChamado: dados.IDChamado,
            NomePessoa: dados.nome,
            Descricao: dados.descricao,
            Tipo: dados.tipo,
        },
        {
            where: { IDChamado: id }
        });

        res.redirect('/');
    }
}
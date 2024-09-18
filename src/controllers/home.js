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
        const todos = await chamado.findAll({
            raw: true,
            atributes: ['IDChamado', 'NomePessoa', 'Descricao', 'Tipo'],
        });

        if (todos != null) {
            await todos.destroy();
        }

        res.redirect('/');
    },

    async apagarExclusivo(req, res) {
        const id = req.params.IDChamado;

        const unico = await chamado.findByPk(id);

        if (unico != null) {
            unico.destroy({
                where: {
                    IDChamado: `${id}`,
                },
            });
        }
        res.redirect('/');
    },

    async editar(req, res) {
        const dados = req.body;
        const id = req.params.IDChamado;

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
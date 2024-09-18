const Sequelize = require('sequelize')
const database = require('../config/db')

const chamado = database.define('Chamado', {
    IDChamado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },

    NomePessoa: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Tipo: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = chamado;
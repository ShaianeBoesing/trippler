const { avgCostPerCategory, topTenItens, avgGradePerTrip } = require('../models/standard');

exports.query1 = async function(req, res) {
    try {
        const data = await avgCostPerCategory();
        res.status(200).json({ data });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter o custo médio de paradas por categoria' });
    }
};

exports.query2 = async function(req, res) {
    try {
        const data = await topTenItens();
        res.status(200).json({ data });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter a lista de itens mais levados em viagens' });
    }
};

exports.query3 = async function(req, res) {
    try {
        const userId = req.params.userId;
        const data = await avgGradePerTrip(userId);
        res.status(200).json({ data });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter a nota média das viagens do usuário selecionado' });
    }
};

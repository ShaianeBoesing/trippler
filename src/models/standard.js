const Database = require('../../database');

async function avgCostPerCategory() {
    const db = new Database();
    const query = `SELECT Categoria.nome, CONCAT('R$ ', FORMAT(AVG(Parada.custo), 2)) as custo_medio
                   FROM Categoria
                   JOIN Ponto_Turistico USING (id_categoria)
                   JOIN Parada USING (id_ponto)
                   GROUP BY Categoria.id_categoria;`;

    const [rows] = await db.raw(query);
    return [rows];
}

async function topTenItens() {
    const db = new Database();
    const query = `SELECT Item.nome, SUM(Viagem_Item.quantidade) as quantidade_levada
                   FROM Item
                   JOIN Viagem_Item USING (id_item)
                   JOIN  Viagem USING (id_viagem)
                   GROUP BY id_item
                   ORDER BY quantidade_levada DESC
                   LIMIT 10;`;

    const [rows] = await db.raw(query);
    return [rows];
}

async function avgGradePerTrip(userId) {
    const db = new Database();
    const query = `SELECT Usuario.nome as usuario, Viagem.nome as viagem, FORMAT(AVG(Review.nota), 1) as nota_media
                   FROM Usuario
                   LEFT JOIN Viagem ON Usuario.id_usuario = Viagem.id_usuario
                   LEFT JOIN Review ON Viagem.id_viagem = Review.id_viagem
                   WHERE Usuario.id_usuario = ${userId}
                   GROUP BY Viagem.id_viagem;`;

    const [rows] = await db.raw(query);
    return [rows];
}

module.exports = { avgCostPerCategory, topTenItens, avgGradePerTrip };

const Database = require('../../database');

class TuristicSpot {
  constructor(turisticSpots) {
    this.id_ponto = turisticSpots.id_ponto;
    this.id_categoria = turisticSpots.id_categoria;
    this.nome = turisticSpots.nome;
    this.localizacao = turisticSpots.localizacao;
  }

  static async createTuristicSpot(newTuristicSpot) {

    const db = new Database();
    const values = newTuristicSpot
    const turisticSpotsId = await db.insert('Ponto_Turistico', values);
    
    newTuristicSpot.id_ponto = turisticSpotsId;
    return new TuristicSpot(newTuristicSpot);
  }

  static async getTuristicSpotById(turisticSpotsId) {
    const query = 'SELECT * FROM Ponto_Turistico WHERE id_ponto = ?';

    const db = new Database();
    const turisticSpotsRows = await db.select(query, [turisticSpotsId]);
    
    if (turisticSpotsRows.length === 0) {
      return null;
    }
    const turisticSpotsData = turisticSpotsRows[0];
    return new TuristicSpot(turisticSpotsData);
  }

  static async updateTuristicSpot(turisticSpotId, updatedTuristicSpot) {
    const values = updatedTuristicSpot;

    const db = new Database();
    await db.update('Ponto_Turistico', turisticSpotId, values);
    
    updatedTuristicSpot.id_ponto = turisticSpotId;
    return new TuristicSpot(updatedTuristicSpot);
  }

  static async deleteTuristicSpot(turisticSpotId) {
    const id = { 'id_ponto': turisticSpotId}
    const db = new Database();
    await db.delete('Ponto_Turistico', id);
  }

  static async listTuristicSpots() {
    const query = 'SELECT * FROM Ponto_Turistico ORDER BY nome ASC';

    const db = new Database();
    const turisticSpotsRows = await db.raw(query);

    const pontosTuristicos = turisticSpotsRows.map(
      (turisticSpotsData) => new TuristicSpot(turisticSpotsData)
    );
    return pontosTuristicos;
  }
}

module.exports = TuristicSpot;

const Database = require('../../database');
const { CategoryNotFoundError } = require('./category');

class TuristicSpotNotFoundError extends Error {
  constructor(message = 'Ponto Turístico não encontrado.', errorCode = 404) {
    super(message);
    this.name = 'TuristicSpotNotFoundError';
    this.errorCode = errorCode;
  }
}

class TuristicSpot {
  constructor(turisticSpots) {
    this.id_ponto = turisticSpots.id_ponto;
    this.id_categoria = turisticSpots.id_categoria;
    this.nome = turisticSpots.nome;
    this.localizacao = turisticSpots.localizacao;
  }

  static async createTuristicSpot(newTuristicSpot) {
    const id_categoria = newTuristicSpot["id_categoria"];
 
    const db = new Database();
    const categoryExists = await db.raw('SELECT id_categoria FROM Categoria WHERE id_categoria = ?', [id_categoria]);
    if (categoryExists.length == 0) {
      throw new CategoryNotFoundError();
    }

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
    const id_categoria = updatedTuristicSpot["id_categoria"];

    const db = new Database();
    if (id_categoria) {
      const categoryExists = await db.raw('SELECT id_categoria FROM Categoria WHERE id_categoria = ?', [id_categoria]);
      if (categoryExists.length == 0) {
        throw new CategoryNotFoundError();
      }
    }

    const values = updatedTuristicSpot;
    const id = { 'id_ponto': turisticSpotId };
    const result = await db.update('Ponto_Turistico', id, values);

    if (result.affectedRows == 0) {
      throw new TuristicSpotNotFoundError();
    }

    updatedTuristicSpot.id_ponto = turisticSpotId;
    return new TuristicSpot(updatedTuristicSpot);
  }

  static async deleteTuristicSpot(turisticSpotId) {
    const id = { 'id_ponto': turisticSpotId}
    const db = new Database();
    const result = await db.delete('Ponto_Turistico', id);
    if (result.affectedRows === 0) {
      throw new TuristicSpotNotFoundError();
    }
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

module.exports = { TuristicSpot, TuristicSpotNotFoundError };

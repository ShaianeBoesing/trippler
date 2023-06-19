const Database = require('../../database');
const { TripNotFoundError, UserNotTripOwner } = require('./trip');

class MidiaNotFoundError extends Error {
  constructor(message = 'Midia não encontrada.', errorCode = 404) {
    super(message);
    this.name = 'MidiaNotFoundError';
    this.errorCode = errorCode;
  }
}

class Midia {
  constructor(midia) {
    this.id_midia = midia.id_midia;
    this.arquivo = midia.arquivo;
    this.descricao = midia.descricao;
    this.id_viagem = midia.id_viagem;
  }

  static async listMidiasByTrip(tripId) {
    const query_1 = 'SELECT id_viagem FROM Viagem WHERE id_viagem = ?'

    const db = new Database();
    const trip = await db.raw(query_1, [tripId]);
    
    if (trip.length == 0) 
      throw new TripNotFoundError();

    const query_2 = 'SELECT Viagem.nome AS viagem, Midia.arquivo, Midia.descricao \
                     FROM Midia \
                     JOIN Viagem USING (id_viagem) \
                     WHERE id_viagem = ?';

    const rows = await db.raw(query_2, [tripId]);
    return rows;
  }

  static async createMidia(newMidia) {
    const db = new Database();
    const values = newMidia;
    const midiaId = await db.insert('Midia', values);
    newMidia.id_midia = midiaId;
    return new Midia(newMidia);
  }

  static async updateMidia(midiaId, userId, updatedMidia) {
    const db = new Database();

    const tripIdQuery = `SELECT id_viagem FROM Midia WHERE id_midia = ?`;
    const tripId = await db.raw(tripIdQuery, [midiaId]);

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [tripId[0].id_viagem]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();

    const values = Object.values(updatedMidia);
    const set_values = Object.keys(updatedMidia).map(column => `${column} = ?`).join(', ');
    values.push(midiaId, tripId[0].id_viagem)

    const queryUpdateMidia = `UPDATE Midia SET ${set_values} WHERE id_midia = ? AND id_viagem = ?`;
    const result = await db.raw(queryUpdateMidia, values);

    if (result.affectedRows === 0)
      throw new MidiaNotFoundError();

    return new Midia(updatedMidia);
  }

  static async deleteMidia(midiaId, userId) {
    const db = new Database();

    const tripIdQuery = `SELECT id_viagem FROM Midia WHERE id_midia = ?`;
    const tripId = await db.raw(tripIdQuery, [midiaId]);

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [tripId[0].id_viagem]);

    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
  
    const query = `DELETE Midia
                   FROM Midia 
                   JOIN Viagem ON Midia.id_viagem = Viagem.id_viagem 
                   WHERE Midia.id_midia = ? AND Viagem.id_usuario = ?;`;
  
    const output = await db.raw(query, [midiaId, userId]);
    console.log(output);
  }
}

module.exports = { Midia, MidiaNotFoundError };

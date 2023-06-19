const Database = require('../../database');
const { TuristicSpotNotFoundError } = require('./turistic_spot');
const { TripNotFoundError, UserNotTripOwner } = require('./trip');

class ParadaAlreadyExistsError extends Error {
  constructor(message = 'Esta parada já existe na viagem.', errorCode = 409) {
    super(message);
    this.name = 'ParadaAlreadyExistsError';
    this.errorCode = errorCode;
  }
}

class ParadaNotFoundError extends Error {
  constructor(message = 'Parada não encontrada.', errorCode = 404) {
    super(message);
    this.name = 'ParadaNotFoundError';
    this.errorCode = errorCode;
  }
}

class UserNotParadaOwner extends Error {
  constructor(message = 'Você não tem permissão para modificar esta parada.', errorCode = 403) {
    super(message);
    this.name = 'UserNotParadaOwner';
    this.errorCode = errorCode;
  }
}

class Parada {
  constructor(parada) {
    this.id_viagem = parada.id_viagem;
    this.id_ponto = parada.id_ponto;
    this.nota = parada.nota;
    this.custo = parada.custo;
  }

  static async createParada(newParada, userId) {
    const db = new Database();

    const { id_viagem, id_ponto } = newParada;
  
    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [id_viagem]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [id_viagem]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
    
    const queryCheckTuristicSpot = `SELECT id_ponto FROM Ponto_Turistico WHERE id_ponto = ? LIMIT 1`;
    const turisticSpotExists = await db.raw(queryCheckTuristicSpot, [id_ponto]);
    if (turisticSpotExists.length === 0) 
      throw new TuristicSpotNotFoundError();
    
    const queryCheckExists = `SELECT id_ponto, id_viagem FROM Parada WHERE id_ponto = ? AND id_viagem = ? LIMIT 1`;
    const paradaExists = await db.raw(queryCheckExists, [id_ponto, id_viagem]);
    if (paradaExists.length > 0)
      throw new ParadaAlreadyExistsError();
  
    await db.insert('Parada', newParada);
  
    return new Parada(newParada);
  }
  
  static async updateParada(tripId, turisticSpotId, userId, updatedParada) {
    const db = new Database();
  
    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [tripId]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [tripId]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
    
    const queryCheckTuristicSpot = `SELECT id_ponto FROM Ponto_Turistico WHERE id_ponto = ? LIMIT 1`;
    const turisticSpotExists = await db.raw(queryCheckTuristicSpot, [turisticSpotId]);
    if (turisticSpotExists.length === 0) 
      throw new TuristicSpotNotFoundError();
  
    const values = Object.values(updatedParada);
    values.push(turisticSpotId, tripId);
    const set_values = Object.keys(updatedParada).map(column => `${column} = ?`).join(', ');
  
    const queryUpdateParada = `UPDATE Parada SET ${set_values} WHERE id_ponto = ? AND id_viagem = ?`;
    const result = await db.raw(queryUpdateParada, values);
      
    if (result.affectedRows === 0)
      throw new ParadaNotFoundError();

    updatedParada.id_viagem = tripId;
    updatedParada.id_ponto = turisticSpotId;
  
    return new Parada(updatedParada);
    }
  

  static async deleteParada(tripId, turisticSpotId, userId) {
    const db = new Database();
  
    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [tripId]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [tripId]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
    
    const queryCheckTuristicSpot = `SELECT id_ponto FROM Ponto_Turistico WHERE id_ponto = ? LIMIT 1`;
    const turisticSpotExists = await db.raw(queryCheckTuristicSpot, [turisticSpotId]);
    if (turisticSpotExists.length === 0) 
      throw new TuristicSpotNotFoundError();
  
    const query_1 = `SELECT Viagem.id_usuario FROM Parada JOIN Viagem USING (id_viagem) WHERE Parada.id_viagem = ? AND Parada.id_ponto = ?`;
    const paradaOwner = await db.raw(query_1, [tripId, turisticSpotId]);
    if (paradaOwner.length == 0)
      throw new ParadaNotFoundError();

    if (paradaOwner[0].id_usuario !== userId)
      throw new UserNotParadaOwner();
  
    const query_2 = 'DELETE Parada\
      FROM Parada \
      JOIN Viagem ON Parada.id_viagem = Viagem.id_viagem \
      WHERE Viagem.id_viagem = ? AND id_ponto = ? AND id_usuario = ?';
  
    const retorno = await db.raw(query_2, [tripId, turisticSpotId, userId]);
    console.log(retorno);
  }

  static async listParadasByTrip(tripId) {
    const query_1 = 'SELECT id_viagem FROM Viagem WHERE id_viagem = ?'

    const db = new Database();
    const trip = await db.raw(query_1, [tripId]);
    
    if (trip.length == 0) 
      throw new TripNotFoundError();

    const query_2 = 'SELECT Viagem.nome AS viagem, Ponto.nome as Ponto, Parada.nota, Parada.custo, Ponto.localizacao, Categoria.nome as categoria, Parada.id_viagem, Parada.id_ponto \
    FROM Parada \
    JOIN Ponto_Turistico AS Ponto USING (id_ponto) \
    JOIN Categoria USING (id_categoria) \
    JOIN Viagem USING (id_viagem) \
    WHERE id_viagem = ?';

    const paradaRows = await db.raw(query_2, [tripId]);
    return paradaRows;
  }
}

module.exports = { Parada, ParadaAlreadyExistsError, UserNotParadaOwner, ParadaNotFoundError };

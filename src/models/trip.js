const Database = require('../../database');

class TripNotFoundError extends Error {
  constructor(message = 'Viagem não encontrada.', errorCode = 404) {
    super(message);
    this.name = 'TripNotFoundError';
    this.errorCode = errorCode;
  }
}

class UserNotTripOwner extends Error {
  constructor(message = 'Você não tem permissão para modificar esta viagem.', errorCode = 403) {
    super(message);
    this.name = 'UserNotTripOwner';
    this.errorCode = errorCode;
  }
}

class Trip {
  constructor(trip) {
    this.id_viagem = trip.id_viagem;
    this.data_inicio = trip.data_inicio;
    this.data_fim = trip.data_fim;
    this.cidade = trip.cidade;
    this.pais = trip.pais;
    this.descricao = trip.descricao;
    this.nome = trip.nome;
    this.id_usuario = trip.id_usuario;
  }

  static async createTrip(newTrip) {
    const values = newTrip;

    const db = new Database();
    const tripId = await db.insert('Viagem', values);

    newTrip.id_viagem = tripId;
    return new Trip(newTrip);
  }

  static async getTripById(tripId, userId) {
    const query = 'SELECT * FROM Viagem WHERE id_viagem = ? AND id_usuario = ?';

    const db = new Database();
    const tripRows = await db.raw(query, [tripId, userId]);

    if (tripRows.length === 0) {
      return null;
    }
    const tripData = tripRows[0];
    return new Trip(tripData);
  }

  static async updateTrip(tripId, userId, updatedTrip) {
    const values = Object.values(updatedTrip);
    values.push(userId, tripId);
    const set_values = Object.keys(updatedTrip).map(column => `${column} = ?`).join(', ');
  
    const db = new Database();
    const result = await db.raw(`UPDATE Viagem SET ${set_values} WHERE id_usuario = ? AND id_viagem = ?`, values);
  
    if (result.affectedRows === 0) {
      throw new TripNotFoundError();
    }
  
    updatedTrip.id_usuario = userId;
    updatedTrip.id_viagem = tripId;
  
    return new Trip(updatedTrip);
  }

  static async deleteTrip(tripId, userId) {
    const query = `DELETE FROM Viagem WHERE id_viagem = ? AND id_usuario = ?`;

    const db = new Database();
    const result = await db.raw(query, [tripId, userId]);
    if (result.affectedRows === 0) {
      throw new TripNotFoundError();
    }
  }

  static async listTrips(userId) {
    const query = 'SELECT * FROM Viagem WHERE id_usuario = ?';

    const db = new Database();
    const tripRows = await db.select(query, [userId]);

    const trips = tripRows.map(tripData => new Trip(tripData));
    return trips;
  }
}

module.exports = { Trip, TripNotFoundError, UserNotTripOwner };

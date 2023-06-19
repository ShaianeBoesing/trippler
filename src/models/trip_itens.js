// models/trip_itens.js

const Database = require('../../database');
const { TripNotFoundError, UserNotTripOwner } = require('./trip');
const { ItemNotFoundError } = require('./item');

const db = new Database();

class UserNotTripItemOwner extends Error {
  constructor(message = 'Você não tem permissão para apagar este Trip Item.', errorCode = 403) {
    super(message);
    this.name = 'UserNotParadaOwner';
    this.errorCode = errorCode;
  }
}

class TripItemAlreadyExistsError extends Error {
  constructor(message = 'Esta item já existe na viagem.', errorCode = 409) {
    super(message);
    this.name = 'TripItemAlreadyExistsError';
    this.errorCode = errorCode;
  }
}

class TripItemNotFoundError extends Error {
  constructor(message = 'Esta item não existe.', errorCode = 409) {
    super(message);
    this.name = 'TripItemNotFoundError';
    this.errorCode = errorCode;
  }
}

class TripItem {
  constructor(trip_item) {
    this.id_viagem = trip_item.id_viagem;
    this.id_item = trip_item.id_item;
    this.quantidade = trip_item.quantidade;
  }

  static async createViagemItem(newtripItem, userId) {
    const { id_viagem, id_item } = newtripItem;

    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [id_viagem]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [id_viagem]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
    
    const queryCheckItem = `SELECT id_item FROM Item WHERE id_item = ? LIMIT 1`;
    const ItemExists = await db.raw(queryCheckItem, [id_item]);
    if (ItemExists.length === 0) 
      throw new ItemNotFoundError();

    const queryCheckExists = `SELECT id_item FROM Viagem_Item WHERE id_item = ? AND id_viagem = ? LIMIT 1`;
    const TripItemExists = await db.raw(queryCheckExists, [id_item, id_viagem]);
    if (TripItemExists.length > 0)
      throw new TripItemAlreadyExistsError();

    await db.insert('Viagem_Item', newtripItem);
    return new TripItem(newtripItem);
  }

  static async getViagemItemByViagem(viagemId) {
    const query_1 = 'SELECT id_viagem FROM Viagem WHERE id_viagem = ?'
    const trip = await db.raw(query_1, [viagemId]);
    if (trip.length == 0) 
      throw new TripNotFoundError();

    const query_2 = 'SELECT Viagem.nome AS viagem, Item.nome as Item, vi.quantidade, vi.id_viagem, vi.id_item \
    FROM Viagem_Item AS vi\
    JOIN Viagem USING (id_viagem) \
    JOIN Item USING (id_item) \
    WHERE id_viagem = ?';

    const viagemItens = await db.raw(query_2, [viagemId]);

    return viagemItens;
  }

  static async deleteTripItem(tripId, itemId, userId) {
    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [tripId]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckItem = `SELECT id_item FROM Item WHERE id_item = ? LIMIT 1`;
    const ItemExists = await db.raw(queryCheckItem, [itemId]);
    if (ItemExists.length === 0) 
      throw new ItemNotFoundError();
    
    const selectUser = `SELECT Viagem.id_usuario FROM Viagem_Item JOIN Viagem USING (id_viagem) WHERE Viagem_Item.id_viagem = ? AND Viagem_Item.id_item = ?`;
    const tripItemOwner = await db.raw(selectUser, [tripId, itemId]);
    if (tripItemOwner.length == 0)
      throw new TripItemNotFoundError();

    if (tripItemOwner[0].id_usuario !== userId)
      throw new UserNotTripItemOwner();
    
    const deleteTripItem = 'DELETE Viagem_Item\
      FROM Viagem_Item \
      JOIN Viagem ON Viagem_Item.id_viagem = Viagem.id_viagem \
      WHERE Viagem.id_viagem = ? AND id_item = ? AND id_usuario = ?';
  
    const retorno = await db.raw(deleteTripItem, [tripId, itemId, userId]);
    console.log(retorno);
  }

  static async updateTripItem(tripId, itemId, userId, updatedTripItem) {
    const db = new Database();
  
    const queryCheckTrip = `SELECT id_viagem FROM Viagem WHERE id_viagem = ? LIMIT 1`;
    const tripExists = await db.raw(queryCheckTrip, [tripId]);
    if (tripExists.length === 0) 
      throw new TripNotFoundError();

    const queryCheckTripOwner = `SELECT id_usuario FROM Viagem WHERE Viagem.id_viagem = ? LIMIT 1`;
    const tripOwner = await db.raw(queryCheckTripOwner, [tripId]);
    if (tripOwner[0].id_usuario != userId)
      throw new UserNotTripOwner();
    
    const queryCheckItem = `SELECT id_item FROM Item WHERE id_item = ? LIMIT 1`;
    const ItemExists = await db.raw(queryCheckItem, [itemId]);
    if (ItemExists.length === 0) 
      throw new ItemNotFoundError();
  
    const values = Object.values(updatedTripItem);
    values.push(itemId, tripId);
    const set_values = Object.keys(updatedTripItem).map(column => `${column} = ?`).join(', ');
  
    const queryUpdateTripItem = `UPDATE Viagem_Item SET ${set_values} WHERE id_item = ? AND id_viagem = ?`;
    const result = await db.raw(queryUpdateTripItem, values);
      
    if (result.affectedRows === 0)
      throw new TripItemNotFoundError();

    updatedTripItem.id_viagem = tripId;
    updatedTripItem.id_item = itemId;
  
    return new TripItem(updatedTripItem);
    }

}

module.exports = { TripItem, UserNotTripItemOwner, TripItemAlreadyExistsError, TripItemNotFoundError };
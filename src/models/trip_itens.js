// models/trip_itens.js

const Database = require('../../database');
const db = new Database();

class Trip_Item {
  constructor(trip_item) {
    this.id_viagem = trip_item.id_viagem;
    this.id_item = trip_item.id_item;
    this.quantidade = trip_item.quantidade;
  }

  static async createViagemItem(newtripItem) {
    await db.insert('Viagem_Item', newtripItem);
    return new Trip_Item(newtripItem);
  }

  static async getViagemItemByViagem(viagemId) {
    const query = 'SELECT vi.quantidade, item.nome as nomeItem, viagem.nome as nomeViagem, viagem.descricao as descricaoViagem, usuario.nome FROM Viagem_Item vi \
      JOIN Item item on item.id_item = vi.id_item  \
      JOIN Viagem viagem on viagem.id_viagem = vi.id_viagem \
      JOIN Usuario usuario on usuario.id_usuario = viagem.id_usuario \
      WHERE vi.id_viagem = ?';
    const viagemItens = await db.raw(query, [viagemId]);

    return viagemItens;
  }

  static async deleteTripItem(tripId, itemId, userId) {
    const selectUser = `SELECT id_usuario FROM Viagem WHERE id_viagem = ?`;

    const db = new Database();
  
    const tripItemOwner = await db.raw(selectUser, [tripId]);
    if (tripItemOwner[0].id_usuario !== userId) {
      throw new Exception();
    }
  
    const deleteTripItem = 'DELETE Viagem_Item\
      FROM Viagem_Item \
      JOIN Viagem ON Viagem_Item.id_viagem = Viagem.id_viagem \
      WHERE Viagem.id_viagem = ? AND id_item = ? AND id_usuario = ?';
  
    const retorno = await db.raw(deleteTripItem, [tripId, itemId, userId]);
    console.log(retorno);
  }
}

module.exports = Trip_Item;
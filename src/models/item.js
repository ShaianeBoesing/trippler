// models/Item.js

const Database = require('../../database');
const db = new Database();

class Item {
  constructor(item) {
    this.id_item = item.id_item;
    this.nome = item.nome;
  }

  static async createItem(newItem) {
    const values = newItem;

    const itemId = await db.insert('Item', values);

    newItem.id_item = itemId;
    return new Item(newItem);
  }

  static async getItemById(itemId) {
    const query = 'SELECT * FROM Item WHERE id_item = ?';

    const itemRows = await db.raw(query, [itemId]);

    if (itemRows.length === 0) {
      return null;
    }
    const itemData = itemRows[0];
    return new Item(itemData);
  }

  static async deleteItem(itemId) {
    const id = {'id_item': itemId} 
    await db.delete('Item', id);
  }

  static async listItens() {
    const query = 'SELECT * FROM Item';

    const itensRows = await db.select(query);

    const itens = itensRows.map(itemData => new Item(itemData));
    return itens;
  }
}

module.exports = Item;

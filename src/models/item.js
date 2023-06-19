// models/Item.js

const Database = require('../../database');
const db = new Database();

class ItemNotFoundError extends Error {
  constructor(message = 'Item não encontrado.', errorCode = 404) {
    super(message);
    this.name = 'ItemNotFoundError';
    this.errorCode = errorCode;
  }
}

class ItemDependencyError extends Error {
  constructor(message = 'A exclusão do item não é possível pois existem objetos vinculados a ele.', errorCode = 409) {
    super(message);
    this.name = 'ItemDependencyError';
    this.errorCode = errorCode;
  }
}

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
    const query = `SELECT id_item FROM Viagem_Item WHERE id_item = ? LIMIT 1`;
    const itemUsed = await db.raw(query, [itemId]);

    if (itemUsed.length > 0) {
      throw new ItemDependencyError();
    }
    
    const id = {'id_item': itemId} 
    const result = await db.delete('Item', id);
    if (result.affectedRows == 0) {
      throw new ItemNotFoundError();
    }

  }

  static async updateItem(itemId, updatedItem) {
    const id = { 'id_item': itemId };
    const values = { 'nome': updatedItem["nome"] };
    const result = await db.update('Item', id, values);
    if (result.affectedRows == 0) {
      throw new ItemNotFoundError();
    }

    return new Item(updatedItem);
  }

  static async listItens() {
    const query = 'SELECT * FROM Item';

    const itensRows = await db.select(query);

    const itens = itensRows.map(itemData => new Item(itemData));
    return itens;
  }
}

module.exports = { Item, ItemNotFoundError, ItemDependencyError };

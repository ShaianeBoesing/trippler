// controllers/trip_controller.js

const { Item, ItemNotFoundError, ItemDependencyError } = require('../models/item');

exports.index = async function(req, res) {
  try {
    const itens = await Item.listItens();
    res.status(200).json({ data: itens });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao obter a lista de itens' });
  }
};

exports.create = async function(req, res) {
  try {
    const newItem = req.body;
    const item = await Item.createItem(newItem);
    res.status(201).json({ data: item });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao criar item' });
  }
};

exports.show = async function(req, res) {
  try {
    const itemId = req.params.id;
    const item = await Item.getItemById(itemId);
    if (item) {
      res.status(200).json({ data: item });
    } else {
      res.status(404).json({ error: 'Item não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter item' });
  }
};

exports.delete = async function(req, res) {
  try {
    const itemId = req.params.id;
    await Item.deleteItem(itemId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    if (error instanceof ItemNotFoundError || error instanceof ItemDependencyError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao excluir item' });
    }
  }
};

exports.update = async function(req, res) {
  try {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const item = await Item.updateItem(itemId, updatedItem);
    res.status(200).json({ data: item });
  } catch (error) {
    console.log(error);
    if (error instanceof ItemNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar item' });
    }
  }
};



const Friendship = require('../models/friendship');

exports.create = async function(req, res) {
  try {
    const newFriendship = req.body;
    const friendship = await Friendship.createFriendship(newFriendship);
    res.status(201).json({ data: friendship });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao criar amizade' });
  }
};

exports.show = async function(req, res) {
  try {
    const friendshipId = req.params.id;
    const friendship = await Friendship.getFriendshipById(friendshipId);
    if (friendship) {
      res.status(200).json({ data: friendship });
    } else {
      res.status(404).json({ error: 'Amizade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter amizade' });
  }
};


exports.delete = async function(req, res) {
  try {
    const friendshipId = req.params.id;
    await Friendship.deleteFriendship(friendshipId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao excluir amizade' });
  }
};

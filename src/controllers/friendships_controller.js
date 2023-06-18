const Friendship = require("../models/friendship");

exports.index = async function(req, res) {
    try {
        const userId = req.session.userId;
        const amizades = await Friendship.getFriendshipsByUser(userId);
        res.status(200).json({ data: amizades });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter amizade' });
    }
};

exports.create = async function(req, res) {
    try {
        const newFriendship = req.body;
        newFriendship['id_usuario_1'] = req.session.userId;
        const amizade = await Friendship.createFriendship(newFriendship);
        res.status(201).json({ data: amizade });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao criar amizade' });
    }
};

exports.show = async function(req, res) {
    try {
        const friendshipId = req.params.id;
        const userId = req.session.userId;
        const amizade = await Friendship.getFriendshipById(friendshipId, userId);
        if (amizade) {
            res.status(200).json({ data: amizade });
        } else {
            res.status(404).json({ error: 'Amizade não encontrada' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter amizade' });
    }
};

exports.delete = async function(req, res) {
    try {
        const friendshipId = req.params.id;
        const userId = req.session.userId;
        await Friendship.deleteFriendship(friendshipId, userId);
        res.status(204).json();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao excluir amizade' });
    }
};

exports.update = async function(req, res) {
    try {
        const updatedFriendship = req.body;
        const friendshipId = req.params.id;
        const userId = req.session.userId;
        const friendship = await Friendship.updateFriendship(friendshipId, userId, updatedFriendship);
        res.status(200).json({ data: friendship });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao editar amizade' });
    }
};

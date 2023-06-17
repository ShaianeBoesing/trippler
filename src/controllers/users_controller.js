const User = require('../models/user');

exports.index = async function(req, res) {
    try {
        const users = await User.listUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter a lista de usuários' });
    }
};

exports.create = async function(req, res) {
    try {
        const newUser = req.body;
        const user = await User.createUser(newUser);
        res.status(201).json({ data: user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

exports.show = async function(req, res) {
    try {
        const userId = req.params.id;
        const user = await User.getUserById(userId);
        if (user) {
            res.status(200).json({ data: user });
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao obter usuário' });
    }
};

exports.update = async function(req, res) {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;
        const user = await User.updateUser(userId, updatedUser);
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

exports.delete = async function(req, res) {
    try {
        const userId = req.params.id;
        await User.deleteUser(userId);
        res.status(204).json();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
};

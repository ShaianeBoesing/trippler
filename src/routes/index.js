const routes = require('express').Router();
const users = require('../controllers/users_controller');

// Usuario
routes.get('/users', users.index); // Listar todos os usuários
routes.post('/users', users.create); // Criar um novo usuário
routes.get('/users/:id', users.show); // Obter os detalhes de um usuário específico
routes.put('/users/:id', users.update); // Atualizar as informações de um usuário específico
routes.delete('/users/:id', users.delete); // Excluir um usuário específico

module.exports = routes;

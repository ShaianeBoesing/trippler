const routes = require('express').Router();
const users = require('../controllers/users_controller');
const friendships = require('../controllers/friendships_controller');
const turisticSpots = require('../controllers/turistic_spot_controller');
const tripItem = require('../controllers/trip_item_controller');
const reviews = require('../controllers/review_controller');
const paradas = require('../controllers/parada_controller');

// Users
routes.get('/users', users.index); 
routes.post('/users', users.create); 
routes.get('/users/:id', users.show); 
routes.put('/users/:id', users.update);
routes.delete('/users/:id', users.delete);

// Frindships
routes.post('/friendships', friendships.create);
routes.get('/friendships/:id', friendships.show); 
routes.delete('/friendships/:id', friendships.delete);

// // Pontos Turísticos
// routes.get('/pontos-turisticos', turisticSpots.index); // Listar todos os pontos turísticos
// routes.post('/pontos-turisticos', turisticSpots.create); // Criar um novo ponto turístico
// routes.get('/pontos-turisticos/:id', turisticSpots.show); // Obter os detalhes de um ponto turístico específico
// routes.put('/pontos-turisticos/:id', turisticSpots.update); // Atualizar as informações de um ponto turístico específico
// routes.delete('/pontos-turisticos/:id', turisticSpots.delete); // Excluir um ponto turístico específico

// // Viagem Items
// routes.get('/viagem-items', tripItem.index); // Listar todos os itens de viagem
// routes.post('/viagem-items', tripItem.create); // Adicionar um novo item de viagem
// routes.get('/viagem-items/:viagemId/:itemId', tripItem.show); // Obter os detalhes de um item de viagem específico
// routes.put('/viagem-items/:viagemId/:itemId', tripItem.update); // Atualizar as informações de um item de viagem específico
// routes.delete('/viagem-items/:viagemId/:itemId', tripItem.delete); // Excluir um item de viagem específico

// // Reviews
// routes.get('/reviews', reviews.index); // Listar todas as avaliações
// routes.post('/reviews', reviews.create); // Criar uma nova avaliação
// routes.get('/reviews/:id', reviews.show); // Obter os detalhes de uma avaliação específica
// routes.put('/reviews/:id', reviews.update); // Atualizar as informações de uma avaliação específica
// routes.delete('/reviews/:id', reviews.delete); // Excluir uma avaliação específica

// // Paradas
// routes.get('/paradas', paradas.index); // Listar todas as paradas
// routes.post('/paradas', paradas.create); // Criar uma nova parada
// routes.get('/paradas/:viagemId/:pontoId', paradas.show); // Obter os detalhes de uma parada específica
// routes.put('/paradas/:viagemId/:pontoId', paradas.update); // Atualizar as informações de uma parada específica
// routes.delete('/paradas/:viagemId/:pontoId', paradas.delete); // Excluir uma parada específica

module.exports = routes;

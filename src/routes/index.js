const routes = require('express').Router();
const authenticate_token_middleware = require('../middlewares/authenticate_token_middleware')
const login = require('../controllers/login_controller');
const users = require('../controllers/users_controller');
const friendships = require('../controllers/friendships_controller');
const trips = require('../controllers/trips_controller');
const itens = require('../controllers/itens_controller');
/*
const turisticSpots = require('../controllers/turistic_spot_controller');
const reviews = require('../controllers/reviews_controller');
const categories = require('../controllers/categories_controller');
const tripItem = require('../controllers/trip_items_controller');
const paradas = require('../controllers/parada_controller');
*/

routes.post('/login', login.authenticate);

// Users
routes.get('/users', authenticate_token_middleware.authenticateToken, users.index); 
routes.post('/users', users.create); 
routes.get('/users/:id', authenticate_token_middleware.authenticateToken,  users.show); 
routes.put('/users/:id', authenticate_token_middleware.authenticateToken,  users.update);
routes.delete('/users/:id', authenticate_token_middleware.authenticateToken,  users.delete);

// Frindships
routes.post('/friendships', authenticate_token_middleware.authenticateToken, friendships.create);
routes.get('/friendships/:id', authenticate_token_middleware.authenticateToken, friendships.show); 
routes.delete('/friendships/:id', authenticate_token_middleware.authenticateToken, friendships.delete);

// Trips
routes.get('/trips', authenticate_token_middleware.authenticateToken, trips.index); 
routes.post('/trips', authenticate_token_middleware.authenticateToken, trips.create); 
routes.get('/trips/:id', authenticate_token_middleware.authenticateToken, trips.show); 
routes.put('/trips/:id', authenticate_token_middleware.authenticateToken, trips.update);
routes.delete('/trips/:id', authenticate_token_middleware.authenticateToken, trips.delete);

// Item
routes.get('/itens', authenticate_token_middleware.authenticateToken, itens.index); 
routes.post('/itens', authenticate_token_middleware.authenticateToken, itens.create); 
routes.get('/itens/:id', authenticate_token_middleware.authenticateToken, itens.show); 
routes.delete('/itens/:id', authenticate_token_middleware.authenticateToken, itens.delete);

// Reviews
routes.get('/trip/:tripId/reviews', authenticate_token_middleware.authenticateToken, reviews.index); // Listar todas as avaliações
routes.post('/trip/:tripId/reviews', authenticate_token_middleware.authenticateToken, reviews.create); // Criar uma nova avaliação
routes.delete('/reviews/:id', authenticate_token_middleware.authenticateToken, reviews.delete); // Excluir uma avaliação específica

// Categories
routes.get('/categories', authenticate_token_middleware.authenticateToken, categories.index); // Listar todas as avaliações
routes.get('/categories/:id', authenticate_token_middleware.authenticateToken, categories.show); // Listar todas as avaliações
routes.post('/categories', authenticate_token_middleware.authenticateToken, categories.create); // Criar uma nova avaliação
routes.delete('/categories/:id', authenticate_token_middleware.authenticateToken, categories.delete); // Excluir uma avaliação específica

// Pontos Turísticos 
routes.get('/turistic-spots',authenticate_token_middleware.authenticateToken, turistic_spots.index); // Listar todos os pontos turísticos
routes.post('/turistic-spots', authenticate_token_middleware.authenticateToken, turistic_spots.create); // Criar um novo ponto turístico
routes.get('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.show); // Obter os detalhes de um ponto turístico específico
routes.put('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.update); // Atualizar as informações de um ponto turístico específico
routes.delete('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.delete); // Excluir um ponto turístico específico

// // Viagem Items
// routes.get('/viagem-items', tripItem.index); // Listar todos os itens de viagem
// routes.post('/viagem-items', tripItem.create); // Adicionar um novo item de viagem
// routes.get('/viagem-items/:viagemId/:itemId', tripItem.show); // Obter os detalhes de um item de viagem específico
// routes.put('/viagem-items/:viagemId/:itemId', tripItem.update); // Atualizar as informações de um item de viagem específico
// routes.delete('/viagem-items/:viagemId/:itemId', tripItem.delete); // Excluir um item de viagem específico


// // Paradas
// routes.get('/paradas', paradas.index); // Listar todas as paradas
// routes.post('/paradas', paradas.create); // Criar uma nova parada
// routes.get('/paradas/:viagemId/:pontoId', paradas.show); // Obter os detalhes de uma parada específica
// routes.put('/paradas/:viagemId/:pontoId', paradas.update); // Atualizar as informações de uma parada específica
// routes.delete('/paradas/:viagemId/:pontoId', paradas.delete); // Excluir uma parada específica

module.exports = routes;

const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'images/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const routes = require('express').Router();
const authenticate_token_middleware = require('../middlewares/authenticate_token_middleware')
const login = require('../controllers/login_controller');
const users = require('../controllers/users_controller');
const friendships = require('../controllers/friendships_controller');
const trips = require('../controllers/trips_controller');
const reviews = require('../controllers/reviews_controller');
const categories = require('../controllers/categories_controller');
const turistic_spots = require('../controllers/turistic_spots_controller');
const paradas = require('../controllers/paradas_controller');
const midia = require('../controllers/midias_controller');

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

// Reviews
routes.get('/trip/:tripId/reviews', authenticate_token_middleware.authenticateToken, reviews.index);
routes.post('/trip/:tripId/reviews', authenticate_token_middleware.authenticateToken, reviews.create);
routes.delete('/reviews/:id', authenticate_token_middleware.authenticateToken, reviews.delete);

// Categories
routes.get('/categories', authenticate_token_middleware.authenticateToken, categories.index);
routes.get('/categories/:id', authenticate_token_middleware.authenticateToken, categories.show);
routes.post('/categories', authenticate_token_middleware.authenticateToken, categories.create);
routes.delete('/categories/:id', authenticate_token_middleware.authenticateToken, categories.delete);

// Pontos Turísticos
routes.get('/turistic-spots',authenticate_token_middleware.authenticateToken, turistic_spots.index);
routes.post('/turistic-spots', authenticate_token_middleware.authenticateToken, turistic_spots.create);
routes.get('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.show);
routes.put('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.update); 
routes.delete('/turistic-spots/:id', authenticate_token_middleware.authenticateToken, turistic_spots.delete);

// Paradas
routes.get('/paradas/:tripId', authenticate_token_middleware.authenticateToken, paradas.index); 
routes.post('/paradas/:tripId/:turisticSpotId', authenticate_token_middleware.authenticateToken, paradas.create);
routes.delete('/paradas/:tripId/:turisticSpotId', authenticate_token_middleware.authenticateToken, paradas.delete);

// Midia
routes.post('/midias', upload.single('arquivo'), authenticate_token_middleware.authenticateToken, midia.create); 
routes.get('/midias', authenticate_token_middleware.authenticateToken, midia.show); 
routes.delete('/midias',authenticate_token_middleware.authenticateToken, midia.delete); 

module.exports = routes;

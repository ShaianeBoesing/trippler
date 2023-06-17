const jwt = require('jsonwebtoken');
const User = require('../models/user');  

exports.authenticate = async function (req, res) {
  const username = req.body['username'];
  const userExists = await User.getUserByUsername(username);
  
  if (!userExists) {
    return res.status(401).json({ error: 'Username Inválido'});
  } 
  req.session.userId = userExists.id_usuario;
  const token = jwt.sign({ id_usuario: userExists.id_usuario, username: username }, 'sM0n1fW6yHg4aL9zCv2bQp8nRj5uXe3r', { expiresIn: '1h' });
  res.json({ token });
};

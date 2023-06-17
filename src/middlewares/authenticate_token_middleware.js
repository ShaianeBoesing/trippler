const jwt = require('jsonwebtoken');

exports.authenticateToken = function(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) {
      return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }
  
    jwt.verify(token, 'sM0n1fW6yHg4aL9zCv2bQp8nRj5uXe3r', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Falha na autenticação do token.' });
      }

      if (!req.session || !req.session.userId) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
      }
      req.session.userId = user.id_usuario;
    });


    next();
  };
  
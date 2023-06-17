const Database = require('../../database');

class User {
  constructor(user) {
    this.id_usuario = user.id_usuario;
    this.nome = user.nome;
    this.username = user.username;
    this.email = user.email;
    this.endereco = user.endereco;
    this.telefone = user.telefone;
    this.data_nasc = user.data_nasc;
  }

  static async createUser(newUser) {
    const values = newUser;

    const db = new Database();
    const existingUser = User.getUserByUsername(newUser.username);
    if (existingUser.length > 0) {
      throw new Error('Nome de usuário já existe');
    }
    const userId = await db.insert('Usuario', values);
  
    newUser.id_usuario = userId;
    return new User(newUser);
  }

  static async getUserById(userId) {
    const query = 'SELECT * FROM Usuario WHERE id_usuario = ?';

    const db = new Database();
    const userRows = await db.select(query, [userId]);

    if (userRows.length === 0) {
      return null;
    }
    const userData = userRows[0];
    return new User(userData);
  }

  static async getUserByUsername(userName) {
    const query = 'SELECT * FROM Usuario WHERE username=?';

    const db = new Database();
    const userRows = await db.raw(query, [userName]);

    if (userRows.length === 0) {
      return null;
    }

    const userData = userRows[0];
    return new User(userData);
  }

  static async updateUser(userId, updatedUser) {
    const set_values = Object.keys(updatedUser).map(column => `${column} = ?`).join(', ');
    const params = [...Object.values(values), userId];

    const db = new Database();
    await db.raw(`UPDATE Usuario SET ${set_values} WHERE id_usuario=?`, [params]);

    updatedUser.id_usuario = userId;
    return new User(updatedUser);
  }

  static async deleteUser(userId) {
    const id = {'id_usuario': userId}

    const db = new Database();
    await db.delete('Usuario', id);
  }

  static async listUsers() {
    const query = 'SELECT * FROM Usuario';

    const db = new Database();
    const userRows = await db.raw(query);
    
    const users = userRows.map(userData => new User(userData));
    return users;
  }
}

module.exports = User;

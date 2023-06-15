// models/User.js

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
    const db = new Database();
    await db.connect();
    const values = {
      nome: newUser.nome,
      username: newUser.username,
      email: newUser.email,
      endereco: newUser.endereco,
      telefone: newUser.telefone,
      data_nasc: newUser.data_nasc,
    };
    const userId = await db.insert('Usuario', values);
    await db.close();
    newUser.id_usuario = userId;
    return new User(newUser);
  }

  static async getUserById(userId) {
    const db = new Database();
    await db.connect();
    const query = 'SELECT * FROM Usuario WHERE id_usuario = ?';
    const userRows = await db.select(query, [userId]);
    await db.close();
    if (userRows.length === 0) {
      return null;
    }
    const userData = userRows[0];
    return new User(userData);
  }

  static async updateUser(userId, updatedUser) {
    const db = new Database();
    await db.connect();
    const values = {
      nome: updatedUser.nome,
      username: updatedUser.username,
      email: updatedUser.email,
      endereco: updatedUser.endereco,
      telefone: updatedUser.telefone,
      data_nasc: updatedUser.data_nasc,
    };
    await db.update('Usuario', 'id_usuario', userId, values);
    await db.close();
    updatedUser.id_usuario = userId;
    return new User(updatedUser);
  }

  static async deleteUser(userId) {
    const db = new Database();
    await db.connect();
    await db.delete('Usuario', 'id_usuario', userId);
    await db.close();
  }

  static async listUsers() {
    const db = new Database();
    await db.connect();
    const query = 'SELECT * FROM Usuario';
    const userRows = await db.select(query);
    await db.close();
    const users = userRows.map(userData => new User(userData));
    return users;
  }
}

module.exports = User;

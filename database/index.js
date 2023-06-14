const mysql = require('mysql2/promise');

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  }

  async insert(table_name, values) {
    const columns = Object.keys(values).join(',');
    const params = Object.values(values);
    const placeholders = params.map(() => '?').join(',');
    const query = `INSERT INTO ${table_name} (${columns}) VALUES (${placeholders})`;
    const [result] = await this.connection.query(query, params);
    return result.insertId;
  }

  async select(query) {
    const [rows] = await this.connection.query(query);
    return rows;
  }

  async update(table_name, id, values) {
    const set_values = Object.keys(values).map(column => `${column} = ?`).join(', ');
    const params = [...Object.values(values), id];
    const query = `UPDATE ${table_name} SET ${set_values} WHERE id=?`;
    await this.connection.query(query, params);
  }

  async delete(table_name, id) {
    const query = `DELETE FROM ${table_name} WHERE id=?`;
    await this.connection.query(query, [id]);
  }

  async close() {
    await this.connection.end();
  }
}

module.exports = Database;

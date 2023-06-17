const Database = require('../../database');

class Friendship {
  constructor(friendship) {
    this.id_amizade = friendship.id_amizade;
    this.data_inicio_amizade = friendship.data_inicio_amizade;
    this.id_usuario_1 = friendship.id_usuario_1;
    this.id_usuario_2 = friendship.id_usuario_2;
  }

  static async createFriendship(newFriendship) {
    const values = newFriendship;
    const currentDate = new Date();
    const dbFormattedDate = currentDate.toISOString().split('T')[0];
    values['data_inicio_amizade'] = dbFormattedDate;

    const db = new Database();
    await db.connect();
    const friendshipId = await db.insert('Amizade', values);
    await db.close();
    newFriendship.id_amizade = friendshipId;
    return new Friendship(newFriendship);
  }

  static async getFriendshipById(friendshipId) {
    const db = new Database();
    await db.connect();
    const query = 'SELECT * FROM Amizade WHERE id_amizade = ?';
    const friendshipRows = await db.select(query, [friendshipId]);
    await db.close();
    if (friendshipRows.length === 0) {
      return null;
    }
    const friendshipData = friendshipRows[0];
    return new Friendship(friendshipData);
  }

  static async deleteFriendship(friendshipId) {
    const id = {'id_amizade': friendshipId}
    const db = new Database();
    await db.connect();
    await db.delete('Amizade', id);
    await db.close();
  }
}

module.exports = Friendship;
const Database = require('../../database');

class UserNotReviewOwner extends Error {
  constructor(message = 'Você não tem permissão para apagar esta review.', errorCode = 403) {
    super(message);
    this.name = 'UserNotReviewOwner';
    this.errorCode = errorCode;
  }
}

class ReviewNotFoundError extends Error {
  constructor(message = 'Review não encontrada.', errorCode = 404) {
    super(message);
    this.name = 'ReviewNotFoundError';
    this.errorCode = errorCode;
  }
}

class Review {
  constructor(review) {
    this.id_review = review.id_review;
    this.nota = review.nota;
    this.descricao = review.descricao;
    this.id_viagem = review.id_viagem;
    this.id_usuario = review.id_usuario;
  }

  static async createReview(newReview) {
    const values = newReview;

    const db = new Database();
    const reviewId = await db.insert('Review', values);

    newReview.id_review = reviewId;
    return new Review(newReview);
  }

  static async deleteReview(reviewId, userId) {
    const query_1 = `SELECT id_usuario FROM Review WHERE id_review = ?`;

    const db = new Database();
  
    const reviewOwner = await db.raw(query_1, [reviewId]);
    if (reviewOwner.length == 0) 
      throw new ReviewNotFoundError();

    if (reviewOwner[0].id_usuario !== userId)
      throw new UserNotReviewOwner();

    const query_2 = `DELETE FROM Review WHERE id_review = ?`;
    await db.raw(query_2, [reviewId]);
  }

  static async listReviewsByTrip(tripId) {
    const query = 'SELECT * FROM Review WHERE id_viagem = ?';

    const db = new Database();
    const reviewRows = await db.raw(query, [tripId]);

    const reviews = reviewRows.map(reviewData => new Review(reviewData));
    return reviews;
  }


  static async updateReview(reviewId, userId, updatedReview) {
    const query_1 = `SELECT id_usuario FROM Review WHERE id_review = ?`;

    const db = new Database();
  
    const reviewOwner = await db.raw(query_1, [reviewId]);
      
    if (reviewOwner.length == 0) 
      throw new ReviewNotFoundError();

    if (reviewOwner[0].id_usuario !== userId)
      throw new UserNotReviewOwner();

    const values = {
      'nota': updatedReview["nota"],
      'descricao': updatedReview["descricao"]
    };
    const id = { 'id_review': reviewId };
    await db.update('Review', id, values);

    updatedReview.id_review = reviewId;
    return new Review(updatedReview);
  }
}

module.exports = { Review, ReviewNotFoundError, UserNotReviewOwner };

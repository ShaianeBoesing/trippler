const Review = require('../models/review');

exports.index = async function(req, res) {
  try {
    const tripId = req.params.tripId;
    const reviews = await Review.listReviewsByTrip(tripId);
    res.status(200).json({ data: reviews });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error ao buscar reviews' });
  }
};

exports.create = async function(req, res) {
  try {
    const newReview = req.body;
    newReview['id_usuario'] = req.session.userId; 
    newReview['id_viagem'] = req.params.tripId; 
    const review = await Review.createReview(newReview);
    res.status(201).json({ data: review });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error creating Review' });
  }
};

exports.delete = async function(req, res) {
  try {
    const reviewId = req.params.id;
    const userId = req.session.userId;
    await Review.deleteReview(reviewId, userId);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting Review' });
  }
};


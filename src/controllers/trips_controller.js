// controllers/trip_controller.js

const { Trip, TripNotFoundError } = require('../models/trip');

exports.index = async function(req, res) {
  try {
    const trips = await Trip.listTrips(req.session.userId);
    res.status(200).json({ data: trips });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Erro ao obter a lista de viagens' });
  }
};

exports.create = async function(req, res) {
  try {
    const newTrip = req.body;
    newTrip['id_usuario'] = req.session.userId; 
    const trip = await Trip.createTrip(newTrip);
    res.status(201).json({ data: trip });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao criar viagem' });
  }
};

exports.show = async function(req, res) {
  try {
    const tripId = req.params.id;
    const userId = req.session.userId;
    const trip = await Trip.getTripById(tripId, userId);
    if (trip) {
      res.status(200).json({ data: trip });
    } else {
      throw new TripNotFoundError();
    }
  } catch (error) {
    if (error instanceof TripNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar viagem' });
    }
  }
};

exports.update = async function(req, res) {
  try {
    const tripId = req.params.id;
    const userId = req.session.userId;
    const updatedTrip = req.body;
    const trip = await Trip.updateTrip(tripId, userId, updatedTrip);
    res.status(200).json({ data: trip });
  } catch (error) {
    console.log(error);
    if (error instanceof TripNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao atualizar viagem' });
    }
  }
};

exports.delete = async function(req, res) {
  try {
    const tripId = req.params.id;
    const userId = req.session.userId;
    await Trip.deleteTrip(tripId, userId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    if (error instanceof TripNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao excluir viagem' });
    }
  }
};

const { Parada, ParadaAlreadyExistsError, UserNotParadaOwner, ParadaNotFoundError } = require('../models/parada');
const { TripNotFoundError, UserNotTripOwner } = require('../models/trip');
const { TuristicSpotNotFoundError } = require('../models/turistic_spot');

exports.index = async function(req, res) {
  try {
    const tripId = req.params.tripId;
    const paradas = await Parada.listParadasByTrip(tripId);
    res.status(200).json({ data: paradas });
  } catch (error) {
    console.log(error);
    if (error instanceof TripNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao retornar a lista de Paradas' });
    }
  }
};

exports.create = async function(req, res) {
  try {
    const newParada = req.body;
    newParada['id_viagem'] = req.params.tripId;
    newParada['id_ponto'] = req.params.turisticSpotId;
    const userId = req.session.userId;
    const parada = await Parada.createParada(newParada, userId);
    res.status(201).json({ data: parada });
  } catch (error) {
    console.log(error);
    if (error instanceof ParadaAlreadyExistsError || error instanceof UserNotTripOwner || error instanceof TripNotFoundError || error instanceof TuristicSpotNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao criar parada' });
    }
  }
};

exports.update = async function(req, res) {
  try {
    const tripId = req.params.tripId;
    const turisticSpotId = req.params.turisticSpotId;
    const updatedParada = req.body;
    const userId = req.session.userId;
    const trip = await Parada.updateParada(tripId, turisticSpotId, userId, updatedParada);
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
    const { tripId, turisticSpotId } = req.params;
    const userId = req.session.userId;
    await Parada.deleteParada(tripId, turisticSpotId, userId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
    if (error instanceof ParadaAlreadyExistsError || error instanceof UserNotTripOwner || error instanceof TripNotFoundError || error instanceof TuristicSpotNotFoundError || error instanceof UserNotParadaOwner || error instanceof ParadaNotFoundError) {
      res.status(error.errorCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erro ao deletar parada' });
    }
  }
};


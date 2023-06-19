const { TripItem, UserNotTripItemOwner, TripItemAlreadyExistsError, TripItemNotFoundError } = require('../models/trip_itens');
const { TripNotFoundError, UserNotTripOwner } = require('../models/trip');
const { ItemNotFoundError } = require('../models/item');

exports.index = async function(req, res) {
    try {
        const viagemId = req.params.id;
        const tripItens = await TripItem.getViagemItemByViagem(viagemId)
        return res.status(200).json({ data: tripItens });
    } catch (error) {
        console.log(error);
        if (error instanceof TripNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao obter a lista de Itens de Viagem' });
        }
    }
};

exports.create = async function(req, res) {
    try {
        const newTripItem = req.body;
        const userId = req.session.userId;
        const tripItem = await TripItem.createViagemItem(newTripItem, userId);
        res.status(201).json({ data: tripItem });
    } catch (error) {
        console.log(error);
        if (error instanceof TripItemAlreadyExistsError || error instanceof TripNotFoundError || error instanceof UserNotTripOwner || error instanceof ItemNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao criar Item de Viagem' });
        }
    }
};

exports.update = async function(req, res) {
    try {
        const updatedTripItem = req.body;
        const tripId = req.params.tripId;
        const itemId = req.params.itemId;
        const userId = req.session.userId;
        const tripItem = await TripItem.updateTripItem(tripId, itemId, userId, updatedTripItem);
        res.status(200).json({ data: tripItem });
    } catch (error) {
        console.log(error);
        if (error instanceof UserNotTripItemOwner || error instanceof TripItemNotFoundError || error instanceof TripNotFoundError || error instanceof ItemNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao atualizar Item de Viagem' });
        }
    }
};

exports.delete = async function(req, res) {
    try {
        const tripId = req.params.tripId;
        const itemId = req.params.itemId;
        const userId = req.session.userId;
        await TripItem.deleteTripItem(tripId, itemId, userId);
        res.status(204).json();
    } catch (error) {
        console.log(error)
        if (error instanceof UserNotTripItemOwner  || error instanceof TripItemNotFoundError || error instanceof TripItemNotFound ||error instanceof TripNotFoundError || error instanceof ItemNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao deletar parada' });
        }
    }
};

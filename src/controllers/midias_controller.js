const { Midia, MidiaNotFoundError } = require('../models/midia');
const { TripNotFoundError, UserNotTripOwner } = require('../models/trip');

exports.index = async function (req, res) {
    try {
        const tripId = req.params.tripId;
        const midia = await Midia.listMidiasByTrip(tripId);
        res.status(200).json({ data: midia });
    } catch (error) {
        console.log(error);
        if (error instanceof TripNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao retornar aas midias' });
        }
    }
};

exports.create = async function (req, res) {
    try {
        const file = req.file.path;
        const newMidia = req.body;
        newMidia["arquivo"] = file;
        const midia = await Midia.createMidia(newMidia);
        res.status(201).json({ data: midia });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao criar midia' });
    }
};

exports.update = async function (req, res) {
    try {
        const midiaId = req.params.midiaId;
        const userId = req.session.userId;

        const file = req.file.path;
        const updatedMidia = req.body;
        updatedMidia["arquivo"] = file;

        const midia = await Midia.updateMidia(midiaId, userId, updatedMidia);
        res.status(200).json({ data: midia });
    } catch (error) {
        console.log(error);
        if (error instanceof TripNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao atualizar midia' });
        }
    }
};

exports.delete = async function (req, res) {
    try {
        const midiaId = req.params.midiaId;
        const userId = req.session.userId;
        await Midia.deleteMidia(midiaId, userId);
        res.status(204).json();
    } catch (error) {
        console.log(error);
        if (error instanceof UserNotTripOwner || error instanceof TripNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao deletar midia' });
        }
    }
};

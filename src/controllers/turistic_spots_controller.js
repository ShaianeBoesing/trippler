const { TuristicSpot, TuristicSpotNotFoundError } = require('../models/turistic_spot');
const { CategoryNotFoundError } = require('../models/category');

exports.index = async function(req, res) {
    try {
        const turisticSpots = await TuristicSpot.listTuristicSpots();
        return res.status(200).json({ data: turisticSpots });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter a lista de pontos turísticos' });
    }
};

exports.create = async function(req, res) {
    try {
        const newTuristicSpot = req.body;
        const turisticSpot = await TuristicSpot.createTuristicSpot(newTuristicSpot);
        res.status(201).json({ data: turisticSpot });
    } catch (error) {
      console.log(error);
      if (error instanceof CategoryNotFoundError) {
        res.status(error.errorCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Erro ao criar ponto turístico' });
      }
    }
};

exports.show = async function(req, res) {
    try {
        const turisticSpotId = req.params.id;
        const turisticSpot = await TuristicSpot.getTuristicSpotById(turisticSpotId);
        if (turisticSpot) {
            return res.status(200).json({ data: turisticSpot });
        } else {
            return res.status(404).json({ error: 'Ponto turístico não encontrado' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro ao obter ponto turístico' });
    }
};

exports.update = async function(req, res) {
    try {
        const turisticSpotId = req.params.id;
        const updatedTuristicSpot = req.body;
        const turisticSpot = await TuristicSpot.updateTuristicSpot(turisticSpotId, updatedTuristicSpot);
        res.status(200).json({ data: turisticSpot });
    } catch (error) {
        console.log(error);
        if (error instanceof CategoryNotFoundError || error instanceof TuristicSpotNotFoundError) {
          res.status(error.errorCode).json({ error: error.message });
        } else {
          res.status(500).json({ error: 'Erro ao atualizar ponto turístico' });
        }
      }
};

exports.delete = async function(req, res) {
    try {
        const turisticSpotId = req.params.id;
        await TuristicSpot.deleteTuristicSpot(turisticSpotId);
        res.status(204).json();
    } catch (error) {
        console.log(error);
        if (error instanceof CategoryNotFoundError || error instanceof TuristicSpotNotFoundError) {
            res.status(error.errorCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Erro ao excluir ponto turístico' });
        }
    }
};

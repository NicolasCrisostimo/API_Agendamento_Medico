const express = require('express');
const Consulta = require('../models/Consulta');
const router = express.Router();

// Criar consulta
router.post('/', async (req, res) => {
  try {
    const consulta = await Consulta.create(req.body);
    res.status(201).json(consulta);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todas as consultas
router.get('/', async (req, res) => {
  try {
    const { medico, data } = req.query;
    const filtro = {};

    if (medico) filtro.medico = medico;
    if (data) {
      const inicioDia = new Date(data);
      inicioDia.setUTCHours(0, 0, 0, 0);
      const fimDia = new Date(data);
      fimDia.setUTCHours(23, 59, 59, 999);
      filtro.dataHora = { $gte: inicioDia, $lte: fimDia };
    }

    const consultas = await Consulta.find(filtro)
      .populate('paciente', 'nome email cpf')
      .populate('medico', 'nome especialidade crm');

    res.json(consultas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cancelar consulta por ID
router.delete('/:id', async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndDelete(req.params.id);
    if (!consulta) return res.status(404).json({ error: 'Consulta não encontrada' });
    res.json({ message: 'Consulta cancelada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
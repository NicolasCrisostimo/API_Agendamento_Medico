const express = require('express');
const Medico = require('../models/Medico');
const router = express.Router();

// Criar médico
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const medico = await Medico.create(req.body);
    res.status(201).json(medico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos
router.get('/', async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.json(medicos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar por ID
router.get('/:id', async (req, res) => {
  try {
    const medico = await Medico.findById(req.params.id);
    if (!medico) return res.status(404).json({ error: 'Médico não encontrado' });
    res.json(medico);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar por ID
router.put('/:id', async (req, res) => {
  try {
    const medico = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medico) return res.status(404).json({ error: 'Médico não encontrado' });
    res.json(medico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar por ID
router.delete('/:id', async (req, res) => {
  try {
    const medico = await Medico.findByIdAndDelete(req.params.id);
    if (!medico) return res.status(404).json({ error: 'Médico não encontrado' });
    res.json({ message: 'Médico removido' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
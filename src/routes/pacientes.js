const express = require('express');
const Paciente = require('../models/Paciente');
const router = express.Router();

// Criar paciente
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Buscar por ID
router.get('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(paciente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar por ID
router.put('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Deletar por ID
router.delete('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) return res.status(404).json({ error: 'Paciente não encontrado' });
    res.json({ message: 'Paciente removido' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
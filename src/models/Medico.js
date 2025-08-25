const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  crm: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('Medico', medicoSchema);
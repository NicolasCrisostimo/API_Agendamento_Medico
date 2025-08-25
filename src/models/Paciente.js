const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, trim: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, 'E-mail inválido'] },
  cpf: { 
    type: String, required: true, trim: true, unique: true,
    match: [/^\d{11}$/, 'CPF deve ter 11 dígitos numéricos']
  },
}, { timestamps: true });

module.exports = mongoose.model('Paciente', PacienteSchema);
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

// Rotas
const pacienteRoutes = require('./routes/pacientes');
const medicoRoutes = require('./routes/medicos');
const consultaRoutes = require('./routes/consultas');
app.use('/pacientes', pacienteRoutes);
app.use('/medicos', medicoRoutes);
app.use('/consultas', consultaRoutes);

// Abrindo servidor pela porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
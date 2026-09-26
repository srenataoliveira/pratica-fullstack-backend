const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
  salarioBase: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

module.exports = mongoose.model('Cargo', CargoSchema);
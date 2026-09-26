const Cargo = require('../models/Cargo');

// 1. Criar um novo cargo (Create)
exports.criarCargo = async (req, res) => {
  try {
    const { nome, departamento, salarioBase } = req.body;
    const novoCargo = new Cargo({ nome, departamento, salarioBase });
    await novoCargo.save();
    res.status(201).json(novoCargo);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar cargo', erro: error.message });
  }
};

// 2. Listar todos os cargos (Read)
exports.listarCargos = async (req, res) => {
  try {
    const cargos = await Cargo.find();
    res.status(200).json(cargos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar cargos', erro: error.message });
  }
};

// 3. Buscar cargo por ID (Read One)
exports.buscarCargoPorId = async (req, res) => {
  try {
    const cargo = await Cargo.findById(req.params.id);
    if (!cargo) {
      return res.status(404).json({ mensagem: 'Cargo não encontrado' });
    }
    res.status(200).json(cargo);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar o cargo', erro: error.message });
  }
};

// 4. Atualizar um cargo (Update)
exports.atualizarCargo = async (req, res) => {
  try {
    const cargoAtualizado = await Cargo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Retorna o objeto já atualizado
    );
    res.status(200).json(cargoAtualizado);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar cargo', erro: error.message });
  }
};

// 5. Deletar um cargo (Delete)
exports.deletarCargo = async (req, res) => {
  try {
    await Cargo.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: 'Cargo removido com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar cargo', erro: error.message });
  }
};
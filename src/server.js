require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Importação das Rotas
const userRoutes = require("./routes/userRoutes");
const cargoRoutes = require("./routes/cargoRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de Teste
app.get("/", (req, res) => {
  res.json({ mensagem: "API de Cargos e Usuários funcionando!" });
});

// Registo das Rotas da API
app.use("/usuarios", userRoutes);
app.use("/api/cargos", cargoRoutes);

// Configuração da Porta e Conexão ao Banco de Dados
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Conectado ao MongoDB Atlas com sucesso!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });
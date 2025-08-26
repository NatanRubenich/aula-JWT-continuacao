// Arquivo principal da aplicação

import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'

dotenv.config();
const app = express();

app.use(express.json());

// Rotas de autenticação
app.use('api/auth', authRoutes);

// Inicialização do serve
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`);
});

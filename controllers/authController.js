// Logica de autenticação

import pool from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


// Função para registrar um novo usuário

export const register = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        // Verificar se o usuário já existe
        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // criptografar a senha (hash)



    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Função para fazer login
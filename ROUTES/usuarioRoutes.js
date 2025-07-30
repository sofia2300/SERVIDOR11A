import express from 'express';
const router = express.Router();

import {
    listarUsuarios
} from '../CONTROLLERS/usuarioControllers.js';

router.get('/usuarios', listarUsuarios);

export default router
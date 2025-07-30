import express from 'express';
const router = express.Router();

import {
    listarUsuarios
} from '../CONTROLLERS/usuarioControllers.js';

router.get('/', listarUsuarios);

export default router
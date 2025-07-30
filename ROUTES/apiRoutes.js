import express from 'express'
import usuariosRoutes from './usuarioRoutes.js'

const router = express.Router ();

router.use('/usuarios', usuariosRoutes);

export default router
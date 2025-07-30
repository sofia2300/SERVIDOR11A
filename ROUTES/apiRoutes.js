import express from 'express'
import usuariosRoutes from './usuarioRoutes.js'

const router = express.Router ();

router.use('/user', usuariosRoutes);

export default router
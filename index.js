
import express from 'express';
import cors from 'cors';
import {connectoDB} from './CONFIGDB/connectoDB.js'
import { insertarSemillaDB } from './CONFIGDB/insertSemillaDB.js';
import apiRoutes from './'

const app =express();
const PORT =4200;

app.use(cors());
app.use(express.json());
app.use(express.static("PUBLIC"));

app.get('/prueba', (req, res) => {
  res.json({message: 'Prueba de respuesta de servidor'});
});

connectoDB();
insertarSemillaDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


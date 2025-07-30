import Usuario from "../MODELS/usuariosModel.js"

export async function listarUsuarios(req,res) {
    try {
        const usuarios = await Usuarios.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json ({message: "Error al listar usuarios", error});
    }
}
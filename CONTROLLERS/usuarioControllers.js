import Usuario from "../MODELS/usuariosModel.js"

export async function listarUsuarios(req,res) {
    try {
        // console.log("controladora")

        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json ({message: "Error al listar usuarios", error});
    }
}
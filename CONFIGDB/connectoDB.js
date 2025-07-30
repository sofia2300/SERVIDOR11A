import mongoose from "mongoose";

const uri = "mongodb+srv://sofia2300:Cali123@cluster0.mjiscpe.mongodb.net/bdatos?retryWrites=true&w=majority&appName=Cluster0"

export const connectoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log ("Conexion a la base de datos exitosa")
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
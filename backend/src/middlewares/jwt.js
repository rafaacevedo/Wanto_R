import jwt from "jsonwebtoken";
import {SECRET} from "../db.config.js";
import { pool } from "../db.config.js";

export const validatetoken = async (req,res,next) => {
    const accessToken = req.header("accessToken")
    if(!accessToken) return res.json({message: 'Usuario no logueado'})
    try {
        const validtoken = jwt.verify(accessToken,SECRET)
        req.correo = validtoken.correo
        req.userId = validtoken.id_usuario;
        req.nombre = validtoken.nombre;
        req.apellido = validtoken.apellido
        const user  = await pool.query("SELECT * FROM usuario WHERE id_usuario = ?",[req.userId])
        console.log("ValidToken:", validtoken.id)
        console.log("Decoded Token:", validtoken);
        console.log("Resultado de la consulta:", user);
        if(!user) return res.json({message: 'Usuario no existe'})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}
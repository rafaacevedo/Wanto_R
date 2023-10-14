import { pool } from "../db.config.js";

export const obtenerMaquinaPorUsuario = async (req, res) => {
    const { id } = req.params; 
    console.debug('ID de usuario:', id); 

    try {
        if (!id) {
            return res.status(400).json({ error: 'Falta el parámetro id_usuario' });
        }

        const [rows] = await pool.query('SELECT * FROM maquinas WHERE id_usuario = ?', [id]);

        if (rows.length > 0) {
            const maquina = rows[0];
            console.log("Objeto de la máquina:", maquina);
            return res.status(200).json(maquina);
        } else {
            return res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error del servidor' });
    }
};

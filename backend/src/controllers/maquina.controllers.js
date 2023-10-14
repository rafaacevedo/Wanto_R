import { pool } from '../db.config.js';

export const obtenerMaquinaPorUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    console.log("id de usuario:", id_usuario);
    try {
        if (!id_usuario) {
            return res.status(400).json({ error: 'Falta el parámetro id_usuario' });
        }

        const [rows] = await pool.query('SELECT * FROM maquinas WHERE id_usuario = ?', [id_usuario]);

        if (id_usuario !== req.usuario.id_usuario) {
            return res.status(403).json({ error: 'Acceso no autorizado' });
        }

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
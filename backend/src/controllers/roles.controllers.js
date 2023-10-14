import { pool } from "../db.config.js";

export const getRoles = async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM rol');
        res.send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error del servidor' });
    }
}

export const getRol = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT rol FROM rol WHERE id = ?', [id])
        if (rows.length === 0) {
            res.status(404).json({error: 'No se ha encontrado rol'})
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error del servidor' });
    }
}

export const getRolId = async (req, res) => {
    try {
        const { id } = req.params
        console.log("ID recibido en el backend:", id);
        const [rows] = await pool.query('SELECT id FROM rol WHERE id = ?', [id])
        if (rows.length === 0) {
            res.status(404).json({error: 'No se ha encontrado id'})
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error del servidor' });
    }
}


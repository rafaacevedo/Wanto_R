import { pool } from '../db.config.js';
import { encryptPassword } from '../helpers/bcryptjs.js'
import { compare } from '../helpers/bcryptjs.js';
import jwt from "jsonwebtoken";
import { SECRET } from "../db.config.js";

export const registrarUsuario = async (req, res) => {
  try {
    const { correo, contraseña, nombre, apellido, telefono, rol } = req.body;
    const encrypted = await encryptPassword(contraseña);

    const rolId = 2;

    const [existingUser] = await pool.query('SELECT * from usuario WHERE correo = ?',[correo])
    if (existingUser.length > 0) {
      return res.status(409).send('El correo ya esta registrado')
    }

    const [result] = await pool.query(
      'INSERT INTO usuario (correo, contraseña, nombre, apellido, telefono, rol) VALUES (?, ?, ?, ?, ?, ?)',
      [correo, encrypted, nombre, apellido, telefono, rolId]
    );

    res.status(201).json({
      id_usuario: result.insertId,
      correo,
      nombre,
      apellido,
      telefono,
      rol: rolId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};




export const logeoUsuario = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const [rows] = await pool.query('SELECT id_usuario, correo, nombre, apellido, rol, contraseña FROM usuario WHERE correo = ?', [correo]);
    if (rows.length > 0) {
      const compPassword = await compare(contraseña, rows[0].contraseña);
      if (compPassword) {
        const accessToken = jwt.sign(
          {
            id_usuario: rows[0].id_usuario,
            correo: rows[0].correo,
            nombre: rows[0].nombre,
            apellido: rows[0].apellido,
            rol: rows[0].rol,
          },
          SECRET,
          {
            expiresIn: '7h',
          }
        );
        return res.status(200).json({ accessToken, rol: rows[0].rol }); 
      } else {
        return res.status(400).send('La contraseña es incorrecta');
      }
    } else {
      return res.status(400).send('El usuario no existe');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};




export const getUsuarios = async (req, res) => {
  try {
    const [data] = await pool.query('SELECT * FROM usuarios');
    res.send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};


export const getUserInfo = async (req, res) => {
  const userId = req.userId;

  try {
    const [userResult] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [userId]);

    if (userResult.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const user = userResult[0];

    res.status(200).json({
      id_usuario: user.id_usuario,
      correo: user.correo,
      nombre: user.nombre,
      apellido: user.apellido,
      rol: user.rol,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};


export const updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    // console.log('Valor de userId:', userId);

    const { id, correo, nombre, apellido, telefono, rol } = req.body;

    const idFound = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);

    if (idFound[0].length > 0) {
      return res.status(404).json({ message: 'Este correo ya se encuentra registrado' });
    }

    const [result] = await pool.query(
      'UPDATE usuario SET correo = COALESCE(?, correo), nombre = COALESCE(?, nombre), apellido = COALESCE(?, apellido), telefono = COALESCE(?, telefono), rol = COALESCE(?, rol) WHERE id_usuario = ?',
      [correo, nombre, apellido, telefono, rol, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.send({ correo, nombre, apellido, telefono, rol, userId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.userId;
    const [result] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [userId]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'No se encontró al usuario' });
    }

    res.send({ message: 'Usuario eliminado correctamente', id_usuario: userId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};


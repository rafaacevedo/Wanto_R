import { pool } from '../db.config.js';
import { encryptPassword } from '../helpers/bcryptjs.js'
import { compare } from '../helpers/bcryptjs.js';
import jwt from "jsonwebtoken";
import { SECRET } from "../db.config.js";

export const registrarCliente = async ( req, res ) => {
    try {
        const {
            id_cliente, correo, contraseña, nombre, apellido, telefono
    } = req.body;
    const encrypted = await encryptPassword( contraseña )
    console.log( req.body );
    const [ rows ] = await pool.query(
        'INSERT INTO clientes ( id_cliente, correo, contraseña, nombre, apellido, telefono ) VALUES (?,?,?,?,?,?)',[ id_cliente, correo, encrypted, nombre, apellido, telefono ]
    );
    console.log( rows );
    res.send (({
        id_cliente: rows.id_cliente,
        correo,
        encrypted,
        nombre, 
        apellido, 
        telefono
    })); 

} catch ( error ) {
    return res.status( 404 ).json({
        message: 'error al ingresar los datos'
    });
};
};


export const logeoCliente = async ( req, res ) => {
    try {
    const { correo, contraseña } = req.body;
    console.log( req.body );
    console.log( typeof( contraseña ))
    const [rows] = await pool.query(
      'SELECT * FROM clientes WHERE correo = ? ', [ correo ]
);
    if ( rows.length > 0 ) {
    console.log(rows[ 0 ].contraseña,"esta es la contraseña" );
        const compassword = await compare( contraseña, rows[ 0 ].contraseña );
    console.log( compassword,"aqui comparas" );
    if( compassword ){
        const accessToken = jwt.sign(
            { id: rows[0].id_cliente, correo: rows[0].correo,nombre: rows[0].nombre,apellido: rows[0].apellido},
            SECRET,
            {
                expiresIn: "7h",
            }
        );
            return res.status(200).json(accessToken);
    }else{
        res.status( 400 ).send( "el usuario no existe" )
    }
    } else {
        res.status( 400 ).send( "El usuario no existe" );
}
}   catch ( error ) {
        console.log(error)
        res.status( 500 ).json({ error: "Error del servidor" });
}
};

export const getRegistro = async(req,res) => {
    try {
        
        const[data] = await pool.query("SELECT * FROM clientes")
        res.send(data)
    } catch (error) {
        res.status( 500 ).json({ error: "Error del servidor" });
    }
}





export const updateUsers = async(req, res ) => {
    try {
        const user = req.UserId
        console.log(user)
        const { correo, nombre, apellido, telefono} = req.body;
        console.log(req.body);
        
        const [row] = await pool.query ( "UPDATE clientes SET correo = COALESCE (?, correo ), nombre = COALESCE  (?, nombre ), apellido = COALESCE (?, apellido), telefono = COALESCE  (?, telefono) WHERE id_cliente = ?", [ correo, nombre, apellido, telefono, user ]);
        console.log(row[0]);

        if (row.affectedRows === 0) { 
            return res.status(404).json({message: "Usuario no encontrado." })
        }

    
        res.send ({ correo, nombre, apellido, telefono, user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error en el servidor",})
    } 
}
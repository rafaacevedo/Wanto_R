import { pool } from '../db.config.js';


export const registrarCliente = async ( req, res ) => {
    try {
      const {
          id_cliente, correo, contraseña, nombre, apellido, telefono
    } = req.body;
    console.log( req.body );
    const [ rows ] = await pool.query(
        'INSERT INTO clientes ( id_cliente, correo, contraseña, nombre, apellido, telefono ) VALUES (?,?,?,?,?,?)',[ id_cliente, correo, contraseña, nombre, apellido, telefono ]
    );
    console.log( rows );
    res.send (({
        id_cliente: rows.id_cliente,
        correo,
        contraseña,
        nombre, 
        apellido, 
        telefono
    })); 
  
    
} catch ( error ) {
    return res.status( 404 ).json({
        message: 'error al ingresar los datos'
    })
  }
}


export const logeoCliente = async (req,res) => {
  try {
      const{ correo, contraseña } = req.body;
      const [ rows ] = await pool.query ( "SELECT * FROM clientes WHERE correo =? AND contraseña =?", [ correo, contraseña ]);
  console.log(rows);
  return res.status( 200 ).json ({ message: "usuario ingresado exitosamente"})
} catch ( error ) {
  return res.status( 500 ).json({
      message: "Error al ingresar usuario"
  })
}}

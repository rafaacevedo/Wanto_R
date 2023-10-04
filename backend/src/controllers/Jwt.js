export const Authorization = (req,res) => {
    const correo = req.correo 
    const UserId = req.UserId 
    const nombre = req.nombre 
    const apellido = req.apellido 

    const datos = {
    correo,
    UserId,
    nombre,
    apellido,
    }
    res.status(200).json(datos)
}
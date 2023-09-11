import  express  from "express";
import router from './routes/clientes.routes.js'
import cors from "cors";

const app = express()

app.use(express.json());

app.use( router )
app.listen(3005,() =>{
    console.log( 'estoy corriendo en el puerto 3005' )
});
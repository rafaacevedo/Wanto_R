import  express  from "express";
import router from './routes/clientes.routes.js'
import cors from "cors";
import morgan from "morgan";

const app = express() 
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use( router )
app.listen(3005,() =>{
    console.log( 'estoy corriendo en el puerto 3005' )
});
import { Router } from 'express';
import * as userCtrl1 from '../controllers/clientes.controllers.js'
import * as Jwt from "../middlewares/jwt.js";
import { Authorization } from "../controllers/Jwt.js";
const router = Router();

router.post( '/register', userCtrl1.registrarCliente );

router.post( '/login', userCtrl1.logeoCliente );

router.get( '/getclientes', userCtrl1.getRegistro );

router.patch( '/editProfile',Jwt.validatetoken,userCtrl1.updateUsers );

router.get('/aut',Jwt.validatetoken,Authorization)

export default router;

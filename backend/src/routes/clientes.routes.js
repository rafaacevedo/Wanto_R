import { Router } from 'express';
import * as userCtrl1 from '../controllers/clientes.controllers.js'
const router = Router();

router.post( '/register', userCtrl1.registrarCliente );

router.post( '/register/login', userCtrl1.logeoCliente );


export default router

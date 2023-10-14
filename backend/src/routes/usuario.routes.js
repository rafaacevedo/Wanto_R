import { Router } from 'express';
import * as userCtrl1 from '../controllers/usuario.controllers.js'
import * as Jwt from "../middlewares/jwt.js";
import { Authorization } from "../controllers/Jwt.js";
import { getRol, getRolId, getRoles } from '../controllers/roles.controllers.js';
import { obtenerMaquinaPorUsuario } from '../controllers/maquina.controllers.js';
const router = Router();

router.post( '/register', userCtrl1.registrarUsuario );

router.post( '/login', userCtrl1.logeoUsuario );

router.get( '/getclientes', userCtrl1.getUsuarios );

router.patch('/editProfile',Jwt.validatetoken, userCtrl1.updateUser );

router.delete('/deleteProfile',Jwt.validatetoken, userCtrl1.deleteUser);

router.get('/aut',Jwt.validatetoken, Authorization)

router.get('/personal',Jwt.validatetoken, userCtrl1.getUsuarios)

router.get('/roles', getRoles)

router.get('/rol/:id', getRol)

router.get('/getRolId/:id', getRolId)

router.get('/maquina/:id_usuario', obtenerMaquinaPorUsuario)

router.get('/user-info', Jwt.validatetoken, userCtrl1.getUserInfo);




export default router;

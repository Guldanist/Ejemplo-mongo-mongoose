import {usuario_controller} from './../controllers/usuario';
import {Router} from 'express';
export var usuario_router = Router();

usuario_router.get('/usuario',usuario_controller.getAll);
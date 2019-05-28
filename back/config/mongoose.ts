import {usuarioSchema} from './../models/Usuario';
import mongoose from 'mongoose';

export var Usuario = mongoose.model('usuario',usuarioSchema);
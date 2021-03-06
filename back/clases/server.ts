import express from 'express';
import { Response, Request, NextFunction } from 'express';
import {usuario_router} from './../routes/Usuario';
import mongoose from 'mongoose';
export default class Server {

    public app: express.Application;
    public puerto: any;
    public conexion: any;

    constructor() {
        this.app = express();
        // CONFIGURANDO EL CORS
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // todos se deben conectar de este dominio:
            res.header('Access-Control-Allow-Origin', 'http://codigo3chatmau.epizy.com/');
            res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
            res.header('Access-Control-Allow-Methods', 'GET, POST');
            res.header('Allow', 'GET,POST');
            next();
        });        

        this.puerto = process.env.PORT || 3700;
        this.configurarBodyParser();
        this.asignarRutas();   
        this.conectarMongo();     
    }

    conectarMongo(){
        mongoose.connect('mongodb://localhost:27017/codigovirtual');
        this.conexion = mongoose.connection;
    }

    configurarBodyParser(){
        var bodyParser = require('body-parser');
        this.app.use(bodyParser.urlencoded({ extended: false}))
        this.app.use(bodyParser.json());
    }

    asignarRutas() {
        this.app.get('/', (req, res) => {
            res.send("Buenas");
        });
        this.app.use('/api',usuario_router);
    }
    
    start() {
        this.app.listen(this.puerto, () => {
            console.log("Servidor corriendo exitosamente en el puerto " + this.puerto);
        });
    }
}
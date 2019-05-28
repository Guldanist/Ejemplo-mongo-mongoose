import { Request, Response } from 'express';
import {Usuario} from './../config/mongoose';
export var usuario_controller = {
    getAll: (req: Request, res: Response) => {
        Usuario.find((error,response)=>{
            if(error){
                res.status(500).json({
                    error:"error en el servidor"
                });
            }
            else{
                res.status(200).json({
                    content:response,
                    message:"ok"
                })
            }
        })
    },    
}
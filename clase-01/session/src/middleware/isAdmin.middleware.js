import { request } from "express"

export const isAdmin = (req = request, response, next) =>{
    try {
        if(!req.session.admin || !req.session.user){
            return res.status(401).send("No tienes permiso para acceder a esta ruta")
        }
        next();
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }
}
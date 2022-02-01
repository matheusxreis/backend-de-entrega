import { NextFunction, Request, Response} from 'express'
import {verify} from 'jsonwebtoken'

interface IPayload {
sub: string

}

export async function ensureAuthenticateClient(
    request: Request, response: Response, next: NextFunction
){

    const authHeader = request.headers.authorization;

    if(!authHeader){
       return response.status(401).json({
           message:'Token missing'
       })
    }

    //Bearer 891728971890238-2987873373
    // [0] - Bearer
    // [1] - 891728971890238-2987873373
    const [, token] = authHeader.split(" ")

    //verify, caso não seja válido, retorna um erro
    try{
           const {sub} = verify(token, "1d2e96e6bdcc46d081bbc47064237dff") as IPayload

            request.id_client = sub
            //console.log(sub)
            
            return next()
    }catch(err){
        return response.status(401).json({
            message:'Invalid token'
        })
    }
}
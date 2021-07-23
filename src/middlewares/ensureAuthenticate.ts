import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

interface IPayLoad{
  sub:string
}

export function EnsureAuthenticate(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if (!authToken) {
      return response.status(401).json({message: "missing token"})
    }

    const [,token] = authToken.split(" ")

    try {
      const { sub } = verify(token,"f0b345c2876f20aaa1588202c580935a") as IPayLoad

      request.user_id = sub

    } catch (error) {
      response.status(401).json({message: "token not valid"})
    }

    return next();
}
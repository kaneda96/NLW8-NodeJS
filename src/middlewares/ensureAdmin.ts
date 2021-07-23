import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


export async function EnsureAdmin(request: Request, response: Response, next: NextFunction){

  const {user_id} = request;

  const userRepository = getCustomRepository(UsersRepositories)

  const user = await userRepository.findOne({id: user_id})

  if (!user.admin) {
    return response.status(401).json({message: "User is not admin"})
  }

    const admin = true; 

    if (!admin) {
      return response.status(401).json({
        error: "User is not admin"
      })
    }

    return next()



}
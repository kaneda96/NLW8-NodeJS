import {Request, Response} from 'express'
import { UserService } from "../services/UserServices"


export class UserController {

  async Insert(request: Request, respose: Response){
    const {name, email, admin, password} = request.body;

    const userService = new UserService();

    const user = await userService.execute({name,email,admin, password})

    return respose.json(user)
  }

  async List(request: Request, respose: Response){

    const userService = new UserService();

    const user = await userService.List()

    return respose.json(user)
  }

}
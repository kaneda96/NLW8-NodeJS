import { Request, Response } from "express";
import { AuthenticationServices } from "../services/AuthenticationServices";


export class AuthenticationController{
  async handle(request: Request, response: Response){

    const { email, password } = request.body

    const authenticationServices = new AuthenticationServices()

    const jwt = await authenticationServices.execute({email, password})

    return response.json(jwt)

  }
}
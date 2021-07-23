import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from "typeorm";



interface IRequestAuthentication{
  email: string;
  password: string;
}


export class AuthenticationServices {
  async execute({email, password}: IRequestAuthentication){

    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne({email})

    if (!user) {
      throw new Error("User/password not correct")
    }

   const matchPassword = await compare(password, user.password)

    if (!matchPassword) {
      throw new Error("User/password not correct")
    }

    

    return sign({
      email: user.email,
    },"f0b345c2876f20aaa1588202c580935a",{
      subject:user.id,
      expiresIn: 60 * 15
    })

  }
}
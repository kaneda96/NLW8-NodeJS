import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs' 

interface IUserRequest {
  name: string;
  email:string;
  admin?: boolean;
  password: string;
}


export class UserService{

  async execute({name, email, admin = false, password}:IUserRequest){
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await userRepository.findOne({email})

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const encryptedPassword = await hash(password, 8)

    var user = userRepository.create({
      name,
      email,
      admin,
      password: encryptedPassword   
    });

    await userRepository.save(user);
    
    return user;
  }

  async List(){
    const userRepository = getCustomRepository(UsersRepositories)

    const users = await userRepository.find()

    return users

  }

}
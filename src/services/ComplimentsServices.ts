import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IRequestCompliments{

  tag_id: string;
  user_receiver: string;
  user_sender: string;
  message:string;
  
}

export class ComplimentsServices{
 async create({tag_id, user_receiver, user_sender, message}:IRequestCompliments){

  const userRespository = getCustomRepository(UsersRepositories)
  const compliementsRepository = getCustomRepository(ComplimentsRepositories)

  if (user_receiver === user_sender) {
    throw new Error("Incorrect user receiver!")
  }

  const userReceiverExists = userRespository.findOne({id:user_receiver})

  if (!userReceiverExists) {
    throw new Error("User not correct!")
  }

  const compliement = compliementsRepository.create({
    id_user_receiver: user_receiver,
    id_user_sender: user_sender,
    tag_id: tag_id,
    message
  })

  const compliementSaved = compliementsRepository.save(compliement)

  return compliementSaved
 }

 async List(){
  const complimentsRepository = getCustomRepository(ComplimentsRepositories)

  const compliments = complimentsRepository.find({relations:["userSender","userReceiver","Tag"]})

  return compliments

 }

}
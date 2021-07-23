import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";


interface IRequestTag{

}

export class TagsService{
  async create(name: string){
  const tagRepository = getCustomRepository(TagRepositories)
  
    if (!name) {
      throw new Error("Incorrect name!")
    }

   var tagAlreadyExists = await tagRepository.findOne({name});

   if (tagAlreadyExists) {
     throw new Error("Tag Already Exists!")
   }

   var tag = await tagRepository.create({
     name
   })

   await tagRepository.save(tag);

   return tag
  }
}
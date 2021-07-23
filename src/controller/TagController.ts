import { Request, Response } from "express";
import { TagsService } from "../services/TagsServices"


export class TagController {

  async handle(request: Request ,response: Response){
    const { name } = request.body

    const service = new TagsService()

    const tag = await service.create(name);

    return response.json(tag);

  }

}
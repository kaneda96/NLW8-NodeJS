import { ComplimentsServices } from "../services/ComplimentsServices"


export class ComplimentsController{
  async handle(request,response){
    const {user_receiver, message, tag_id} = request.body
    const { user_id } = request

    const compliementsService = new ComplimentsServices()

    const compliement = await compliementsService.create({
      user_sender: user_id,
      user_receiver,
      tag_id,
      message,
    })

    return response.json(compliement)

  }

  async List(request,response){

    const complimentsService = new ComplimentsServices()

    const compliments = await complimentsService.List()

    return response.json(compliments)

  }
}
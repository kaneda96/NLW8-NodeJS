import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";


@EntityRepository(Tag)
export class TagRepositories extends Repository<Tag>{

}
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";


@Entity("compliements")
export class Compliments{

  @PrimaryColumn()
  readonly id: string;

  @Column({name:"user_receiver"})
  id_user_receiver: string;

  @JoinColumn({name: 'user_receiver'})
  @ManyToOne(() => User)
  userReceiver: User

  @Column({name:"user_sender"})
  id_user_sender: string;

  @JoinColumn({name: 'user_sender'})
  @ManyToOne(() => User)
  userSender: User

  @Column()
  tag_id: string;

  @JoinColumn({name: 'tag_id'})
  @ManyToOne(() => Tag)
  Tag: Tag

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date
  


  /**
   *
   */
  constructor() {   
    if (!this.id) {
      this.id = uuid()
    }
  }

}
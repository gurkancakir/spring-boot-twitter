import {Entities} from "./entities.model";
import {User} from "./user.model";

export interface Tweet {
  id: number;
  text: string;
  createdAt:string;
  fromUser:string;
  profileImageUrl:string;
  entities:Entities[];
  user:User;
  source:string;
}

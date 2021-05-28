import {ModelEntity} from "../interfaces/ModelEntity";

export class ShortUser extends ModelEntity
{
  public userImg: string;
  public name: string;
  public surname: string;


  constructor(data: any) {
    super(data.entityToken);
    this.userImg = data.userImg;
    this.name = data.name;
    this.surname = data.surname;
  }
}

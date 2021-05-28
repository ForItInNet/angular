export abstract class ModelEntity
{
  readonly entityToken: string;


  constructor(entityToken: string) {
    this.entityToken = entityToken;
  }
}


export class AuthenticationToken
{
  readonly registerDate: Date;
  readonly lastSingInDate: Date;
  readonly tokenRegisterIP: string;

  constructor(data: any)
  {
    this.registerDate = data.registerDate;
    this.lastSingInDate = data.registerDate;
    this.tokenRegisterIP = data.tokenRegisterIP;
  }
}

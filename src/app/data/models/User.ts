import {Article} from "./Article";
import {Post} from "./Post";
import {New} from "./New";
import {ShortUser} from "./ShortUser";

export class User
{
  public name: string;
  public surname: string;
  public entityToken: string;
  public email: string;
  public userImg: string;
  public phone: string;
  public authorities: Set<String>;
  public writings: any[] = [];
  public followings: ShortUser[] = [];
  public followers: ShortUser[] = [];
  public active: boolean;
  public dateOfBirthday: Date;
  public lastOnline: Date;
  public registrationDate: Date;
  public userBanPeriod: Date;
  public permanentBanDate: Date;
  public writeArticleBanPeriod: Date;
  public writeArticlePermanentBanDate: Date;
  public gender: String;

  constructor(data: any)
  {
    this.updateUser(data);
  }

  updateUser(data: any): void
  {
    this.name = data.name;
    this.surname = data.surname;
    this.entityToken = data.entityToken;
    this.email = data.email;
    this.userImg = data.userImg;
    this.phone = data.phone;
    this.authorities = data.authorities;

    if(data.followings !== undefined)
      data.followings.forEach(followings => this.followings.push(new ShortUser(followings)));

    if(data.followers !== undefined)
      data.followers.forEach(follower => this.followers.push(new ShortUser(follower)));

    // data.articles.forEach(article => this.writings.push(new Article(article)));
    // data.posts.forEach(post => this.writings.push(new Post(post)));
    // data.news.forEach(news => this.writings.push(new New(news)));

    this.active = data.active;
    this.dateOfBirthday = data.dateOfBirthday;
    this.lastOnline = data.lastOnline;
    this.registrationDate = data.registrationDate;
    this.userBanPeriod = data.userBanPeriod;
    this.permanentBanDate = data.permanentBanDate;
    this.writeArticleBanPeriod = data.writeArticleBanPeriod;
    this.writeArticlePermanentBanDate = data.writeArticlePermanentBanDate;
    this.gender = data.gender;
  }

  public addPost(post: Post): void
  {
    this.writings.push(post)
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../data/models/User";
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";
import {Post} from "../data/models/Post";
import {AuthenticationToken} from "../data/models/AuthenticationToken";

@Injectable({
  providedIn: 'root'
})
export class UserService
{

  constructor(private http: HttpClient,
              private router: Router)
  { }

  public getProfile(): Observable<User>
  {
   return this.http.get<User>('/profile').pipe(map(data => {
     return new User(data);
   }));
  }

  public getUserProfileByEntityToken(entityToken: string)
  {
    return this.http.get<User>('/profile/getUserByEntityToken/' + entityToken).pipe(map(data => {
      return new User(data);
    }));
  }

  public addPost(data: any): Observable<Post>
  {
    return this.http.post<Post>('/profile/addPost', data);
  }

  public getAuthenticationTokens(): Observable<AuthenticationToken[]>
  {
    return this.http.get<Post[]>('/profile/getAuthenticationTokens').pipe(map(data => {

      let tokens: AuthenticationToken[] = [];

      for(let i = 0; i < data.length; i++)
        tokens.push(new AuthenticationToken(data[i]));

      return tokens;
    }));
  }

  public setUserImg(file: FormData): Observable<any>
  {
    return this.http.post<any>('/profile/setUserImg', file).pipe(map(data => {
      return data;
    }));
  }

  public follow(entityToken: string): void
  {
    this.http.post<void>('/profile/follow', {'entityToken': entityToken}).subscribe({
      next: data =>{
      }
    })
  }
}

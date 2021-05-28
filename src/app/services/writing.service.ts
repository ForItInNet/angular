import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Writing} from "../data/interfaces/Writing";
import {map} from "rxjs/operators";
import {Post} from "../data/models/Post";
import {Article} from "../data/models/Article";
import {New} from "../data/models/New";
import {WritingComment} from "../data/models/WritingComment";
import {ShortUser} from "../data/models/ShortUser";
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class WritingService {

  constructor(private http: HttpClient) { }

  public getUserWritingByEntityToken(entityToken: string): Observable<Writing[]>
  {
    return this.http.get<Writing[]>('/writings/getUserWritings/' + entityToken).pipe(map(data => {
      let writings: Writing[] = [];

      data['articles'].forEach(article => writings.push(new Article(article)))
      data['posts'].forEach(post => writings.push(new Post(post)))
      data['news'].forEach(aNew => writings.push(new New(aNew)))

      return writings;
    }));
  }

  public addUserPost(data: any): Observable<Writing>
  {
    return this.http.post<Writing>('/writings/addCurrentUserPost', data).pipe(map(data => {
      return new Post(data)
    }));
  }

  public deleteUserPost(entityToken: string): Observable<Writing>
  {
    return this.http.post<Writing>('/writings/deleteCurrentUserPost', entityToken);
  }

  public setPostEmotion(data): void
  {
    this.http.post<void>('/writings/setPostReaction', data).subscribe({
      next: data => {
      },
      error: data => {
      }
    });
  }

  public addPostComment(writingEntityToken: string, text: string): Observable<WritingComment>
  {
    return this.http.post<WritingComment>('/writings/addPostComment', {
      'entityToken': writingEntityToken,
      'comment': text
    }).pipe(map(data => {
      return new WritingComment(data.entityToken, new ShortUser(AppComponent.getUser(fun => {})),
        data.comment, data.likeNumber, data.dislikeNumber, data.publishDate, data.answers);
    }));
  }
}

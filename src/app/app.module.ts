import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/content/components/home/home.component';
import {RouterModule} from "@angular/router";
import {routeing} from "./app.routing";
import {ArticlesComponent} from './components/content/components/articles/articles.component';
import {ProfileComponent} from './components/content/components/profile/profile.component';
import {NewsComponent} from './components/content/components/news/news.component';
import {UsersComponent} from './components/content/components/users/users.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {RegistrationComponent} from './components/authentication/components/registration/registration.component';
import {AuthorizationComponent} from './components/authentication/components/authorization/authorization.component';
import {ContentComponent} from './components/content/content.component';
import {RegistrationConfirmComponent} from './components/authentication/components/registration-confirm/registration-confirm.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ReactiveFormsModule} from "@angular/forms";
import {Interceptors} from "./services/Interceptors";
import {LogoutComponent} from './components/authentication/components/logout/logout.component';
import {HeaderComponent} from './components/content/components/header/header.component';
import {AddArticleComponent} from './components/content/components/articles/components/add-article/add-article.component';
import {BlogComponent} from './components/content/components/profile/components/blog/blog.component';
import {ProfileArticlesComponent} from './components/content/components/profile/components/profile-articles/profile-articles.component';
import {ProfileWorksComponent} from './components/content/components/profile/components/profil-works/profile-works.component';
import {BlogWritingComponent} from './components/content/components/profile/components/blog/components/blog-writing/blog-writing.component';
import {APP_BASE_HREF} from "@angular/common";
import {UserSettingsComponent} from './components/content/components/profile/components/user-settings/user-settings.component';
import {PopUpComponent} from "./components/content/components/pop-up/pop-up.component";
import { CommentsComponent } from './components/content/components/profile/components/blog/components/blog-writing/components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ProfileComponent,
    NewsComponent,
    UsersComponent,
    AuthenticationComponent,
    RegistrationComponent,
    AuthorizationComponent,
    ContentComponent,
    RegistrationConfirmComponent,
    LogoutComponent,
    HeaderComponent,
    AddArticleComponent,
    BlogComponent,
    ProfileArticlesComponent,
    ProfileWorksComponent,
    BlogWritingComponent,
    PopUpComponent,
    UserSettingsComponent,
    CommentsComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    BrowserModule,
    RouterModule,
    routeing,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors,
      multi: true,
    },
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

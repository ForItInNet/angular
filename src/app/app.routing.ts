import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/content/components/home/home.component";
import {ArticlesComponent} from "./components/content/components/articles/articles.component";
import {ProfileComponent} from "./components/content/components/profile/profile.component";
import {NewsComponent} from "./components/content/components/news/news.component";
import {UsersComponent} from "./components/content/components/users/users.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {RegistrationComponent} from "./components/authentication/components/registration/registration.component";
import {AuthorizationComponent} from "./components/authentication/components/authorization/authorization.component";
import {ContentComponent} from "./components/content/content.component";
import {RegistrationConfirmComponent} from "./components/authentication/components/registration-confirm/registration-confirm.component";
import {LogoutComponent} from "./components/authentication/components/logout/logout.component";
import {BlogComponent} from "./components/content/components/profile/components/blog/blog.component";
import {ProfileWorksComponent} from "./components/content/components/profile/components/profil-works/profile-works.component";
import {ProfileArticlesComponent} from "./components/content/components/profile/components/profile-articles/profile-articles.component";
import {UserSettingsComponent} from "./components/content/components/profile/components/user-settings/user-settings.component";

const routes: Routes = [
  {path: "",         component: ContentComponent, children: [ {path: "", component: HomeComponent} ]},
  {path: "articles", component: ContentComponent, children: [ {path: "", component: ArticlesComponent} ]},
  {path: "profile",  component: ContentComponent,
    children: [ {path: "", component: ProfileComponent } ]},
  {path: "user",  component: ContentComponent,
    children: [ {path: ":id", component: ProfileComponent} ]},
  {path: "news",     component: ContentComponent, children: [ {path: "", component: NewsComponent} ]},
  {path: "users",    component: ContentComponent, children: [ {path: "", component: UsersComponent} ]},
  {path: "registration", component: AuthenticationComponent,
    children: [
      {path: "", component: RegistrationComponent},
      {path: "confirm", component: RegistrationConfirmComponent}
    ]},
  {path: "authorization", component: AuthenticationComponent,
    children: [
      {path: "", component: AuthorizationComponent}
    ]},
  {path: "logout", component: AuthenticationComponent,
    children: [
      {path: "", component: LogoutComponent}
    ]}
];

export const routeing = RouterModule.forRoot(routes);

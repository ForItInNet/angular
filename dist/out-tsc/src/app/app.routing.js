import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NewsComponent } from "./components/news/news.component";
import { UsersComponent } from "./components/users/users.component";
import { AllWritingComponent } from "./components/profile/components/all-writing/all-writing.component";
import { ProfileArticlesComponent } from "./components/profile/components/profile-articles/profile-articles.component";
import { ProfilePostsComponent } from "./components/profile/components/profile-posts/profile-posts.component";
import { ProfileCvComponent } from "./components/profile/components/profile-cv/profile-cv.component";
const routes = [
    { path: "", component: HomeComponent },
    { path: "articles", component: ArticlesComponent },
    { path: "profile", component: ProfileComponent,
        children: [
            { path: "", component: AllWritingComponent },
            { path: "articles", component: ProfileArticlesComponent },
            { path: "posts", component: ProfilePostsComponent },
            { path: "cv", component: ProfileCvComponent }
        ] },
    { path: "news", component: NewsComponent },
    { path: "users", component: UsersComponent }
];
export const routeing = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map
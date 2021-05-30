import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from "@angular/router";
import { routeing } from "./app.routing";
import { ArticlesComponent } from './components/articles/articles.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewsComponent } from './components/news/news.component';
import { UsersComponent } from './components/users/users.component';
import { AllWritingComponent } from './components/profile/components/all-writing/all-writing.component';
import { ProfileArticlesComponent } from './components/profile/components/profile-articles/profile-articles.component';
import { ProfilePostsComponent } from './components/profile/components/profile-posts/profile-posts.component';
import { ProfileCvComponent } from './components/profile/components/profile-cv/profile-cv.component';
import { WritingComponent } from './components/profile/elements/writing/writing.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            ArticlesComponent,
            ProfileComponent,
            NewsComponent,
            UsersComponent,
            AllWritingComponent,
            ProfileArticlesComponent,
            ProfilePostsComponent,
            ProfileCvComponent,
            WritingComponent
        ],
        imports: [
            BrowserModule,
            RouterModule,
            routeing
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
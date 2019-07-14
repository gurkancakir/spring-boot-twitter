import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterListComponent } from './twitter/twitter-list/twitter-list.component';
import { TwitterService } from "./twitter/twitter.service";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {TwitterTrendComponent} from "./twitter/twitter-trend/twitter-trend.component";

const appRoutes: Routes = [
  { path: 'trends', component: TwitterTrendComponent },
  {
    path: 'tweets/:query',
    component: TwitterComponent
  },
  {
    path: 'tweets',
    component: TwitterComponent,
    data: { title: 'Twitter' }
  },
  { path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    TwitterListComponent,
    TwitterTrendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

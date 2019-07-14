import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";

import { Tweet } from "./model/twitter.model";
import { Observable } from "rxjs";

@Injectable()
export class TwitterService {
  private readonly URL = "/api/v1/";

  constructor(private httpClient: HttpClient) {}

  getTweets(hashTag:string) :Observable<Array<Tweet>> {
    return this.httpClient.get<Array<Tweet>>(this.URL + "tweets/%23" + hashTag);
  }

  getTrends(id:number) :Observable<Array<Tweet>> {
    return this.httpClient.get<Array<Tweet>>(this.URL + "trends/" + id);
  }

}

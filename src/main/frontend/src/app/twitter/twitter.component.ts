import { Component, OnInit } from '@angular/core';
import { Tweet } from "./model/twitter.model";

import { TwitterService } from "./twitter.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.sass']
})
export class TwitterComponent implements OnInit {

  tweets: Tweet[];
  hashTag: string = "";
  isHideSearchBar:boolean = false;


  constructor(protected twitterService: TwitterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    var query = this.route.snapshot.paramMap.get('query');
    if (query != null) {
      this.hashTag = query;
      this.isHideSearchBar = true;
      this.getTweets();
    }
  }

  getTweets() {
    if (!this.hashTag) return;
    if (this.hashTag.startsWith("#")) {
      this.hashTag = this.hashTag.replace("#", "");
    }
    this.twitterService.getTweets(this.hashTag).subscribe(
      (tweets : any[]) => {
        this.tweets = tweets
      },
      (error) => console.log(error)
    );
  }

}

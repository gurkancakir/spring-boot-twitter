import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trend} from "../model/trend.model";
import {TwitterService} from "../twitter.service";

@Component({
  selector: 'app-twitter-trend',
  templateUrl: './twitter-trend.component.html',
  styleUrls: ['./twitter-trend.component.sass']
})
export class TwitterTrendComponent implements OnInit {

  trends:Trend[];

  constructor(protected twitterService: TwitterService) { }

  ngOnInit() {
    this.twitterService.getTrends(1).subscribe(
      (trends : any[]) => {
        this.trends = trends
      },
      (error) => console.log(error)
    );
  }

}

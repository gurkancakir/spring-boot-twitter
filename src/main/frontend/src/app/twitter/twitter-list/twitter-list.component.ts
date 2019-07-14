import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tweet } from '../model/twitter.model';

@Component({
  selector: 'app-twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.sass']
})
export class TwitterListComponent implements OnInit {

  @Input()
  tweet:Tweet;

  constructor() { }

  ngOnInit() {
  }

}

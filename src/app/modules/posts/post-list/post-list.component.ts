import { Component, OnInit } from '@angular/core';

import { PostListSevice } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postListService: PostListSevice) { }

  ngOnInit() {
    this.postListService.get('posts')
    .subscribe(res => console.log('res' , res));
  }

}

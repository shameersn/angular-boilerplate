import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutesModule } from './posts-routes.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostListSevice } from './post-list/post-list.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutesModule
  ],
  declarations: [
    PostListComponent
  ],
  providers: [
    PostListSevice
  ]
})
export class PostsModule { }

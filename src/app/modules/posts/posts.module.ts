import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutesModule } from './posts-routes.module';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutesModule
  ],
  declarations: [
    PostListComponent
  ]
})
export class PostsModule { }

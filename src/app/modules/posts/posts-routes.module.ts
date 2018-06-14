import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

const PostsRoutes: Routes = [
    {
        path: '',
        component: PostListComponent,
    },
    {
        path: 'posts/lists',
        component: PostListComponent,
    },
    {
        path: '**',
        redirectTo: '/posts'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PostsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PostsRoutesModule {
    constructor() {}
}

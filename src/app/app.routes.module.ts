import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    loadChildren: './modules/posts/posts.module#PostsModule',
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule',
  },
    {
        path: '**',
        redirectTo: 'posts',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutesModule { }


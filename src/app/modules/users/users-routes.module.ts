import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const UsersRoutes: Routes = [
    {
        path: '',
        component: UsersListComponent,
    },
    {
        path: 'users/list',
        component: UsersListComponent,
    },
    {
        path: '**',
        redirectTo: '/users'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(UsersRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class UsersRoutesModule {
    constructor() {}
}

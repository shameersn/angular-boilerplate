import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutesModule } from './users-routes.module';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutesModule
  ],
  declarations: [
    UsersListComponent
  ]
})
export class UsersModule { }

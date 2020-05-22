import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyUsersComponent } from './my-users/my-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'my_user',
    component: MyUsersComponent
  },
  {
      path: 'create_user',
      component: CreateUserComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

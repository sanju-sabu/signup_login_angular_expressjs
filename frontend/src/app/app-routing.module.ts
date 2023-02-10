import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login-user',component:LoginUserComponent},
  {path:'login',component:LoginComponentComponent},
  {path:'signup',component:SignupComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

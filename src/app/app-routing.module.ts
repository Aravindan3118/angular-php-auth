import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path : 'register',
    component : RegistrationComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

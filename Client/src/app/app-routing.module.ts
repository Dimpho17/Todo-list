import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent },
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

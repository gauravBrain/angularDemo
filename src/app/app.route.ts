import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : 'signup',component : SignupComponent},
  { path : 'dashboard', component : DashboardComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRouting { }
export const routingComponents = [
    LoginComponent, 
    SignupComponent,
    PageNotFoundComponent
];

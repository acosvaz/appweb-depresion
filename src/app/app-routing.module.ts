import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './auth/login.component';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './users/admin.component';
import { UserComponent } from './users/user.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'home', component: HomeComponent},
 {path: 'registro', component: RegistroComponent},
 {path: 'login', component: LoginComponent},
 {path: 'test', component: TestComponent},
 {path: 'admin', component: AdminComponent},
 {path: 'user', component: UserComponent},
 {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

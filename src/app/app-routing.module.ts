import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

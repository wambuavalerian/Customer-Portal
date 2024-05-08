import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimHistoryComponent } from './claims/claim-history/claim-history.component';
import { NewClaimComponent } from './claims/new-claim/new-claim.component';




const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'home', component:HomeComponent},
  {path:'claims',component:ClaimsComponent},
  {path:'claim-history',component:ClaimHistoryComponent},
  {path:'new-claim',component:NewClaimComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

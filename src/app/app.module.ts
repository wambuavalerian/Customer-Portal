import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImageCarouselComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

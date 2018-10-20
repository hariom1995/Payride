import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LiftLoginComponent } from './lift-login/lift-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import {AppRoutingModule} from './app-routing.module';
// import { ProfileComponent } from './profile/profile.component';
import { LiftHomeProfileComponent } from './profile/lift-home-profile/lift-home-profile.component';
import { DriverHomeProfileComponent } from './profile/driver-home-profile/driver-home-profile.component';
import {ProfileHeaderComponent} from './profile/profile-header/profile-header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DriverProfileComponent } from './profile/driver-home-profile/driver-profile/driver-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LiftLoginComponent,
    DriverLoginComponent,
    // ProfileComponent,
    LiftHomeProfileComponent,
    DriverHomeProfileComponent,
    ProfileHeaderComponent,
    RegistrationFormComponent,
    DriverProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

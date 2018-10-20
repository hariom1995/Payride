import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import {DriverLoginComponent} from './driver-login/driver-login.component';
import {LiftLoginComponent} from './lift-login/lift-login.component';
import {DriverHomeProfileComponent} from './profile/driver-home-profile/driver-home-profile.component';
import {LiftHomeProfileComponent} from './profile/lift-home-profile/lift-home-profile.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {DriverProfileComponent} from './profile/driver-home-profile/driver-profile/driver-profile.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  { path: 'liftlogin', component: LiftLoginComponent},
  {path: 'driverlogin', component: DriverLoginComponent},
  {path: 'DriverHome', component: DriverHomeProfileComponent},
  {path: 'LiftHome', component: LiftHomeProfileComponent},
  {path: 'regform', component: RegistrationFormComponent },
  {path: 'driverprof', component: DriverProfileComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './services/log.service';
import { environment } from '../environments/environment';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  providers: [
    LogService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { LogComponent } from './components/log/log.component';
import { StoreService } from './store.service';
import { StateService } from './state.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormComponent, NavComponent, LogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ StoreService, StateService ]
})
export class AppModule { }

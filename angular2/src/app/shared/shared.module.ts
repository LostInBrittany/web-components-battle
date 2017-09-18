import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CardComponent } from './card/card.component';
import { LoginService } from './services/login.service';
import { PeopleService} from './services/people.service';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    CardComponent
  ],
  providers:[
    LoginService,
    PeopleService
  ],
  exports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    CardComponent
  ]
})
export class SharedModule { }

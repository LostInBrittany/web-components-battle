import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { LoginService } from './services/login.service';
import { PeopleService} from './services/people.service';

import { MdModule } from '../core/';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    MdModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent
  ],
  providers:[
    LoginService,
    PeopleService
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }

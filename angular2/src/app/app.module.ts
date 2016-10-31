import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/';
import { SharedModule } from './shared/';

import { AppRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { ListComponent } from './people/list/list.component';
import { MapsComponent } from './people/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeopleComponent,
    ListComponent,
    MapsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

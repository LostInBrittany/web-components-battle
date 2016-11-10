import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { ListComponent } from './people/list/list.component';
import { MapsComponent } from './people/maps/maps.component';


const routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'people', component: PeopleComponent, children:[
    { path: '', redirectTo: 'list', pathMatch: 'prefix'},
    { path: 'list', component: ListComponent },    
    { path: 'map', component: MapsComponent },
    { path: 'map/:id', component: MapsComponent }
  ]}
];

export const AppRoutes = RouterModule.forRoot(routes, {useHash: true});

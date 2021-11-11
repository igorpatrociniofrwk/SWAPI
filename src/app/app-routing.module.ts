import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'films',
    component: FilmsComponent
  },
  {
    path:'peoples',
    component: PeoplesComponent
  },
  {
    path:'planets',
    component: PlanetsComponent
  },
  {
    path:'species',
    component: SpeciesComponent
  },
  {
    path:'starships',
    component: StarshipsComponent
  },
  {
    path:'vehicles',
    component: VehiclesComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'login2',
    component: Login2Component
  }
];


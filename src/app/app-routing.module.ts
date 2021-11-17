import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { LoginComponent } from './login/login.component';
import { EntrarComponent } from './entrar/entrar.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
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
    path:'',
    component: LoginComponent
  },
  {
    path:'entrar',
    component: EntrarComponent
  }
];


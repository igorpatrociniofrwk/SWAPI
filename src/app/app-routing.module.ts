import { AuthGuard } from './components/guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoginComponent } from './components/login/login.component';
import { EntrarComponent } from './components/entrar/entrar.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path:'films',
    canActivate: [AuthGuard],
    component: FilmsComponent
  },
  {
    path:'peoples',
    canActivate: [AuthGuard],
    component: PeoplesComponent
  },
  {
    path:'planets',
    canActivate: [AuthGuard],
    component: PlanetsComponent
  },
  {
    path:'species',
    canActivate: [AuthGuard],
    component: SpeciesComponent
  },
  {
    path:'starships',
    canActivate: [AuthGuard],
    component: StarshipsComponent
  },
  {
    path:'vehicles',
    canActivate: [AuthGuard],
    component: VehiclesComponent
  },
  {
    path:'',
   component: LoginComponent
  },
  {
    path:'entrar',
    canActivate: [AuthGuard],
    component: EntrarComponent
  }
];
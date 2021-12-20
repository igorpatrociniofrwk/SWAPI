import { AuthGuard } from './components/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FilmsService } from './services/films.service';
import { PeoplesService } from './services/peoples.service';
import { PlanetsService } from './services/planets.service';
import { SpeciesService } from './services/species.service'; 
import { StarshipsService } from './services/starships.service'; 
import { VehiclesService } from './services/vehicles.service'; 
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmsComponent } from './components/films/films.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoginComponent } from './components/login/login.component';
import { EntrarComponent } from './components/entrar/entrar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { AuthService } from './components/login/auth.service';
import { PaginationComponent } from './components/shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    PeoplesComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    LoginComponent,
    EntrarComponent,
    NavComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule ,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    FilmsService, 
    PeoplesService,
    PlanetsService,
    SpeciesService,
    StarshipsService,
    VehiclesService,
    AuthService, 
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './components/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Framework';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService, public router: Router) {

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    console.log(this.router.url)

    if (!!localStorage.getItem('usuarioAutenticado')) {
      this.mostrarMenu = Boolean(localStorage.getItem('usuarioAutenticado'));
    }
  }
}

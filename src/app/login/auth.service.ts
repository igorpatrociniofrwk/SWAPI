import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.email === 'usuario@email.com' &&
      usuario.senha === '123456') {

        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/entrar'])
      } else{
        alert("Email ou senha incorretos.");
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
  }
}
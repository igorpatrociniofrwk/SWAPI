import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    const btnMobile = document.getElementById('btn-mobile');

    btnMobile.addEventListener('click', this.toggleMenu);
    btnMobile.addEventListener('touchstart', this.toggleMenu); 
}

    toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute(active);
    if (active) {
        event.currentTarget.setAttribute('Fechar Menu');
    } else {
        event.currentTarget.setAttribute('Abrir Menu');
    }
  }

  onClickFecharMenu(logOut?: boolean) 
  {
    if(!!logOut){
      localStorage.removeItem('usuarioAutenticado');
    }
    this.toggleMenu(event)
  }
}
import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class= 'navbar-brand'>{{pageTitle}}</a>
    <ul class= 'nav nav-pills'>
      <li><a class='nav-link' routerLink='/wellcome'>Inicio</a></li>
      <li><a class='nav-link'routerLink='/products'>Lista de Productos</a></li>
    </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  [x: string]: any;
  pageTitle: string = 'Gestión de Productos Acme';
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';

  constructor(private router:Router){}

  abrirConsulta()
  {
    this.router.navigate(['consulta']);
  }
  abrirListado()
  {
    this.router.navigate(['listado']);    
  }
  abrirMadrid()
  {
    this.router.navigate(['madrid']);    
  }
  abrirToledo()
  {
    this.router.navigate(['toledo']);    
  }
}

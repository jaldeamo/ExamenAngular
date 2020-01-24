import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleService } from 'src/app/servicios/emple.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  filasemp=null;
  filastatus:Empleado;

  constructor(private es:EmpleService) { }

  verListadoCompleto()
  {
    this.es.getListadoCompleto().subscribe(empleado=>{this.filastatus=empleado
    this.filasemp=this.filastatus.data
  });
  }
  ngOnInit() {
    this.verListadoCompleto()
  }

}

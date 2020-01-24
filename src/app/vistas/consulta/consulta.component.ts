import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleService } from 'src/app/servicios/emple.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  filasemp=null;
  filastatus:Empleado;
  ipcForm:number
  salarioEmp:number;
    
  constructor(private es:EmpleService) { }

  calcularsubidaIPC(ipcsal:number)
  {
    this.es.getListadoCompleto().subscribe(empleado=>{this.filastatus=empleado
      this.filasemp=this.filastatus.data
      this.salarioEmp=parseInt(this.filasemp[0].employee_salary)
      console.log(this.ipcForm)
      ipcsal=(this.salarioEmp+((this.salarioEmp*this.ipcForm)/100))
      });
      
      return ipcsal;
  }
  verListadoIPC()
  {
    this.es.getListadoCompleto().subscribe(empleado=>{this.filastatus=empleado
    //this.filasemp=this.filastatus.data[0]
    this.filasemp=this.filastatus.data
    console.log(this.filasemp[0])
    this.salarioEmp=parseInt(this.filasemp[0].employee_salary)
    console.log(this.salarioEmp)
    //console.log(ipcsal)
    });
  }
  ngOnInit() {
    this.verListadoIPC()
  }

}

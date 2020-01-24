import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { ConsultaComponent } from './vistas/consulta/consulta.component';
import { ListadoComponent } from './vistas/listado/listado.component';
import { MadridComponent } from './vistas/madrid/madrid.component';
import { ToledoComponent } from './vistas/toledo/toledo.component';


const routes: Routes = [
  {
    path:'consulta',
    component:ConsultaComponent
  },
  {
    path:'listado',
    component:ListadoComponent
  },
  {
    path:'madrid',
    component:MadridComponent
  },
  {
    path:'toledo',
    component:ToledoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

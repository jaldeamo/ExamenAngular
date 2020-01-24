import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './vistas/consulta/consulta.component';
import { ListadoComponent } from './vistas/listado/listado.component';
import { MadridComponent } from './vistas/madrid/madrid.component';
import { ToledoComponent } from './vistas/toledo/toledo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ListadoComponent,
    MadridComponent,
    ToledoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

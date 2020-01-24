import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleService {

  constructor(private http:HttpClient) { }

  getListadoCompleto()
  {
    const path='http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<Empleado>(path);
  }
}

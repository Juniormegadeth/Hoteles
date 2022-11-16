import { Injectable } from '@angular/core';
import { ReservaI } from '../models/reserva';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  api_uri_django = 'http://127.0.0.1:8000';
  base_path = `${this.api_uri_django}/reserva/rall/`
  constructor(
    private http:HttpClient 
  ) { }

  getAllReserva():Observable<{reserva:ReservaI[]}>{
    return this.http
      .get<{reserva:ReservaI[]}>(this.base_path)
  }

  createReserva(data: any):Observable<any>{
    return this.http
      .post<ReservaI>(this.api_uri_django + '/reserva/rcreate/', data)
  }
}

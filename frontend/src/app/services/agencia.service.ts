import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgenciaI } from '../models/agancia';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  api_uri_django = 'http://127.0.0.1:8000';
  base_path = `${this.api_uri_django}/agencia/aall/`
  constructor(
    private http:HttpClient 
  ) { }

  getAllAgencia():Observable<{agencia:AgenciaI[]}>{
    return this.http
      .get<{agencia:AgenciaI[]}>(this.base_path)
  }

  createAgencia(data: any):Observable<any>{
    return this.http
      .post<AgenciaI>(this.api_uri_django + '/agencia/acreate/', data)
  }

}

import { Injectable } from '@angular/core';
import { CategoriaI } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  api_uri_django = 'http://127.0.0.1:8000';
  base_path = `${this.api_uri_django}/categoria/call/`
  constructor(
    private http:HttpClient 
  ) { }

  getAllCategoria():Observable<{categoria:CategoriaI[]}>{
    return this.http
      .get<{categoria:CategoriaI[]}>(this.base_path)
  }

  createCategoria(data: any):Observable<any>{
    return this.http
      .post<CategoriaI>(this.api_uri_django + '/categoria/ccreate/', data)
  }

}

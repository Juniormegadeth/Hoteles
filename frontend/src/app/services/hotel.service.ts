import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelesI } from '../models/hotels';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  api_uri_django = 'http://127.0.0.1:8000';
  base_path = `${this.api_uri_django}/hoteles/`
  constructor(
    private http:HttpClient 
  ) {}

  getAllHotel():Observable<{hotel:HotelesI[]}>{
    return this.http
      .get<{hotel:HotelesI[]}>(this.base_path)
  }

  getOneHotel(id: number):Observable<{hotel:HotelesI[]}>{
    return this.http
      .get<{hotel:HotelesI[]}>(`${this.base_path}${id}`)
  }

  createHotel(data: any):Observable<any>{
    return this.http.post<HotelesI>(this.api_uri_django + '/hoteles/create/', data)
  }
  
  updateHotel(id: number, data: any): Observable<HotelesI> {
    return this.http.put<HotelesI>(`${this.base_path}/${id}`, data);
  }

  deleteHotel(id: number): Observable<HotelesI> {
    return this.http.delete<HotelesI>(`${this.api_uri_django + '/hoteles/delete'}/${id}`);
  }


}

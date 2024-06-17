import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { ResponseEvento } from '../interfaces/ResponseEvento';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private http=inject(HttpClient)
  private baseUrl:string=appsettings.apiUrl;
  
  constructor() { }

  lista():Observable<ResponseEvento>{
    return this.http.get<ResponseEvento>(`${this.baseUrl}Evento/Lista`);
  }
  createEvento(evento: Evento): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Evento/Nuevo`, evento);
  }
  
}

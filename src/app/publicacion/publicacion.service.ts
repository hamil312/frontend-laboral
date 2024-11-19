import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from './publicacion';

const API_URL_LIST='http://127.0.0.1:8000/api/publicacion/publicacion_list'

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  //Obtener Publicacion
  obternerPublicacion(): Observable<Publicacion[]>{
    return this.http.get<Publicacion[]>(API_URL_LIST);
  }
}

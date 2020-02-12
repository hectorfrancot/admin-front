import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Comentario } from '../models/comentario.model';
import { BaseResponse } from '../../../shared/models/base-response.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private recargarComentarios: Subject<void> = new Subject<void>();

  recargarComentariosObs(): Observable<void> {
    return this.recargarComentarios.asObservable();
  }

  recargarComentariosEmit(): void {
    this.recargarComentarios.next();
  }

  constructor(private http: HttpClient) { }

  obtenerComentarios(usuario: number): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(`${environment.apiUrl}comentarios/${usuario}`);
  }

  agregarComentario(comentario: Comentario): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(`${environment.apiUrl}comentarios`, comentario);
  }
}

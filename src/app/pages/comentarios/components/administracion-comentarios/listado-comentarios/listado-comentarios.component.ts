import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComentariosService } from '../../../services/comentarios.service';
import { BaseResponse } from '../../../../../shared/models/base-response.model';
import { Subscription } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.scss']
})
export class ListadoComentariosComponent implements OnInit, OnDestroy {

  title = 'app';

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Titulo', field: 'titulo' },
    { headerName: 'Fecha de Creacion', field: 'fecha_creacion' },
    { headerName: 'Fecha de Modificacion', field: 'fecha_modficacion' },
    { headerName: 'Usuario', field: 'usuario' },
    { headerName: 'Estatus', field: 'estatus' }
  ];

  rowData;

  recargarComentariosSubscription: Subscription;
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.obtenerComentarios(13).subscribe((response: BaseResponse) => {
      this.rowData = response.data;
    });

    this.recargarComentariosSubscription = this.comentariosService.recargarComentariosObs().pipe(flatMap(() => {
      return this.comentariosService.obtenerComentarios(13);
    })).subscribe((response: BaseResponse) => {
      this.rowData = response.data;
    });
  }

  ngOnDestroy(): void {
    this.recargarComentariosSubscription.unsubscribe();
  }
}

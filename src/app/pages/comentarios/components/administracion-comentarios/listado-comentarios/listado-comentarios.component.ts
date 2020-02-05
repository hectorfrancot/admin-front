import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../../services/comentarios.service';
import { BaseResponse } from '../../../../../shared/models/base-response.model';

@Component({
  selector: 'listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.scss']
})
export class ListadoComentariosComponent implements OnInit {
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
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.obtenerComentarios(1).subscribe((response: BaseResponse) => {
      this.rowData = response.data;
    });
  }

}

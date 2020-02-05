import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { ThemeModule } from '../../@theme/theme.module';
import { AdministracionComentariosComponent } from './components/administracion-comentarios/administracion-comentarios.component';
import { FormComentariosComponent } from './components/administracion-comentarios/form-comentarios/form-comentarios.component';
import { ListadoComentariosComponent } from './components/administracion-comentarios/listado-comentarios/listado-comentarios.component';

@NgModule({
  declarations: [AdministracionComentariosComponent, FormComentariosComponent, ListadoComentariosComponent],
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ]
})
export class ComentariosModule { }

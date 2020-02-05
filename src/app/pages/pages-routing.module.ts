import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../@core/utils/auth.guard';
import { AdministracionComentariosComponent } from './comentarios/components/administracion-comentarios/administracion-comentarios.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'comentarios',
      component: AdministracionComentariosComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '',
      redirectTo: 'comentarios',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

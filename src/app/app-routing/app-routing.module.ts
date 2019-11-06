import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ComentarioDetailComponent} from '../comentario/comentario-detail/comentario-detail.component';
import {ComentarioListComponent} from '../comentario/comentario-list/comentario-list.component';
const routes: Routes = [

  {
    path: 'comentarios',
    children: [{
      path: 'list',
      component: ComentarioListComponent
    },
    {
      path: ':id',
      component: ComentarioDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
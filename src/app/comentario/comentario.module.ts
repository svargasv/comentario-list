import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioService } from './comentario.service';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [CommonModule
  ],
  declarations: [ComentarioListComponent, ComentarioDetailComponent, AppRoutingModule],
  exports : [ComentarioListComponent],
  providers: [ComentarioService]
 
})
export class ComentarioModule { }
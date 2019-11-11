import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {ComentarioModule} from './comentario/comentario.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  imports:      [ BrowserModule,ComentarioModule,HttpClientModule,AppRoutingModule,ReactiveFormsModule,
  ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

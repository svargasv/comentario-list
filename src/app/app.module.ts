import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {ComentarioModule} from './comentario/comentario.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule,ComentarioModule,HttpClientModule,AppRoutingModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ComentarioModule} from './comentario/comentario.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,ComentarioModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

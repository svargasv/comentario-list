import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from './comentario';
import {ComentarioDetail} from './comentario-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const comentarios ='comentarios.json' ;
@Injectable()
export class ComentarioService {

  constructor(private http:HttpClient) {}
    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
   }

   getComentarioDetail(comentarioId):Observable<ComentarioDetail>{
      console.log(comentarioId+" "+API_URL + "comentario-" + comentarioId+".json");
        return this.http.get<ComentarioDetail>(API_URL + "comentario-" + comentarioId+".json");
   }

}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Comentario } from './comentario';
import {ComentarioDetail} from './comentario-detail';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

const API_URL = "http://localhost:8080/s3_cortos-api/api/comentarios";
const comentarios ='comentarios.json' ;
@Injectable()
export class ComentarioService {

private comentariosUrl = "http://localhost:8080/s3_cortos-api/api/comentario";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })};



  constructor(private http:HttpClient) {}


    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL);
   }

   getComentarioDetail(comentarioId):Observable<ComentarioDetail>{
      console.log(comentarioId+" "+API_URL + "comentario-" + comentarioId+".json");
        return this.http.get<ComentarioDetail>(API_URL+"/"+comentarioId);
   }

   createComentario(comment :Comentario):Observable<Comentario>{
      return this.http.post<Comentario>(this.comentariosUrl, comment, this.httpOptions).pipe(tap((comment: Comentario) => console.log(`added comentario w/ ${comment.id} id=${comment.comentario}`)));
   }

   

}
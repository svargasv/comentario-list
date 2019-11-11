import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';
import {Router} from "@angular/router";

@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent  {


  comentarioForm:FormGroup;
  constructor(  private comentarioService:ComentarioService, private formBuilder :FormBuilder, private router: Router) { 
    
    this.comentarioForm= this.formBuilder.group({
      id:["",Validators.required],
      comentario:["",Validators.required],
      fecha:["",Validators.required]
    });
  }

 

  createComentario(newComentario: Comentario)
  {
    console.warn("Su comentario ha sido creado",newComentario);
    this.comentarioForm.reset();
  }

}
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria : Categoria[];
  
    constructor(private categoriaService : CategoriaService) { 
      this.getCategoria();
    }
  
    ngOnInit() {
    }
  
    getCategoria(){
      this.categoriaService.getCategoria()
        .subscribe(response => {
          //Recebe JSON
          this.categoria = response;
          console.log(response)
        })
  
  
    }
  
  }
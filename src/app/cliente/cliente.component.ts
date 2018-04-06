import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente : Cliente[];
  
    constructor(private clienteService : ClienteService) { 
      this.getCliente();
    }
  
    ngOnInit() {
    }
  
    getCliente(){
      this.clienteService.getCliente()
        .subscribe(response => {
          //Recebe JSON
          this.cliente = response;
          console.log(response)
        })
  
  
    }
  
  }
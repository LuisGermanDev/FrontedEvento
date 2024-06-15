import { Component, inject } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { EventoService } from '../../services/evento.service';
import { Evento } from '../../interfaces/Evento';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,MatTableModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

    private eventoService = inject(EventoService); 
    public listaEvento:Evento[]=[];
    public displayedColumns:string[]=["nombre_evento","descripcion","ubicacion","contacto","detalle_fecha"]
    
    constructor(){
      this.eventoService.lista().subscribe({
        next:(data)=>{
          if(data.value.length>0){
            this.listaEvento=data.value
          }
        },
        error:(error) =>{
          console.log(error.message);
        }
      })

    }

}

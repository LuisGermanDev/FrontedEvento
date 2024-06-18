import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { EventoService } from '../../services/evento.service';
import { Evento } from '../../interfaces/Evento';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HistorialEvento } from '../../interfaces/HistorialEvento';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule,MatInputModule,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

    private eventoService = inject(EventoService); 
    public listaEvento:Evento[]=[];
    public displayedColumns:string[]=["nombre_evento","descripcion","ubicacion","contacto","tipo","detalle_fecha",'acciones']


    // public listaHistorial:HistorialEvento[]=[];
    // public displayedColumnsHisEvn:string[]='NombreEvento','Descripcion','Ubicacion','Contacto','Tipo','FechaDetalle']

    
    
    private router = inject(Router);
    Pestana: number = 1; 
    constructor(){
      this.eventoService.lista().subscribe({
        next:(data)=>{
          if(data.value.length>0){
            this.listaEvento=data.value
            console.log(this.listaEvento);
          }
        },
        error:(error) =>{
          console.log(error.message);
        }
      })

    }
    Eventos(){
      this.Pestana=1;
    }
    HistorialEvento(){
      this.Pestana=2;
    }
    HistorialEventoInviduales(){
      this.Pestana=3;
    }
    HistorialEventogrupales(){
      this.Pestana=4;
    }

    // funcion salir
  Salir(){
    this.router.navigate(['']);
    
   }
  CrearEvento(){
    this.router.navigate(["evento"]);
  }

}

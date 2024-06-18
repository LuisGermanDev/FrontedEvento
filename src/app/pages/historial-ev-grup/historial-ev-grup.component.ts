import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { HistorialEvento } from '../../interfaces/HistorialEvento';
@Component({
  selector: 'app-historial-ev-grup',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatInputModule, CommonModule],
  templateUrl: './historial-ev-grup.component.html',
  styleUrl: './historial-ev-grup.component.css'
})
export class HistorialEvGrupComponent {
  private eventoService = inject(EventoService); 
  public listaHistorialEvento: HistorialEvento[] = [];
  public displayedColumnsHisEvn: string[] = ['id', 'nombreEvento', 'descripcion', 'ubicacion', 'contacto', 'tipo', 'fechaDetalle'];
  private router = inject(Router);
  Pestana: number = 1; 

  constructor() {}

  ngOnInit(): void {
    this.obtenerHistorialEvento();
  }
  obtenerHistorialEvento(): void {
    this.eventoService.EventoHistorial().subscribe({
      next: (data) => {
        if (data?.length > 0) {
          this.listaHistorialEvento = data;
        } else {
          this.listaHistorialEvento = [];
        }
        console.log(this.listaHistorialEvento);
      },
      error: (error) => {
        console.error(error.message);
        this.listaHistorialEvento = [];
      }
    });
  }

  
  Eventos(){
    this.router.navigate(['inicio']); 
  }

  HistorialEvento(){
    this.router.navigate(['historial']);
  }

  HistorialEventoInviduales(){
    this.router.navigate(["HistorialEvIn"]);
  }


  
  Salir() {
    this.router.navigate(['']);
  }

  CrearEvento() {
    this.router.navigate(["evento"]);
  }

  inscribirse(element: any) {
    console.log('Inscribirse al evento:', element);
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { HistorialEventoInd } from '../../interfaces/HistorialEventoInd';

@Component({
  selector: 'app-historial-ev-ind',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatInputModule, CommonModule],
  templateUrl: './historial-ev-ind.component.html',
  styleUrls: ['./historial-ev-ind.component.css']
})
export class HistorialEvIndComponent implements OnInit {
  private eventoService = inject(EventoService); 
  public listaHistorialEventoInd: HistorialEventoInd[] = [];
  public displayedColumnsHisEvn: string[] = ['id', 'IDusuario', 'nombreEvento', 'descripcion', 'ubicacion', 'contacto', 'tipo', 'fechaDetalle'];
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.obtenerHistorialEventoInd();
  }

  obtenerHistorialEventoInd(): void {
    this.eventoService.EventoHistorialInd().subscribe({
      next: (data: HistorialEventoInd[]) => {
        if (data.length > 0) {
          this.listaHistorialEventoInd = data;
        } else {
          this.listaHistorialEventoInd = [];
        }
        console.log(this.listaHistorialEventoInd);
      },
      error: (error: any) => {
        console.error(error.message);
        this.listaHistorialEventoInd = [];
      }
    });
  }

  Eventos() {
    this.router.navigate(['inicio']); 
  }

  HistorialEvento() {
    this.router.navigate(['historial']);
  }

  HistorialEventogrupales() {
    this.router.navigate(["HistorialEvGrup"]);
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

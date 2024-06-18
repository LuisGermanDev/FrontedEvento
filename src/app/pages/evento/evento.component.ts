import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccesoService } from '../../services/acceso.service';
import { Router } from '@angular/router';
import { EventoService } from '../../services/evento.service';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatTableModule } from '@angular/material/table';
import { Evento } from '../../interfaces/Evento';


@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatButtonModule,MatInputModule,
    ReactiveFormsModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatSelectModule],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  private eventoService = inject(EventoService);
  private router = inject(Router);
  public formBuild = inject(FormBuilder);


  public formEvento: FormGroup = this.formBuild.group({

 
    nombre_evento: ["", Validators.required],
    descripcion: ["", Validators.required],
    ubicacion: ["", Validators.required],
    contacto: ["", Validators.required],
    tipo: ["", Validators.required],
    detalle_fecha: ["", Validators.required]
  });
  crearEvento() {
    if (this.formEvento.invalid) return;

    const objeto: Evento = {
   
      nombre_evento: this.formEvento.value.nombre_evento,
      descripcion: this.formEvento.value.descripcion,
      ubicacion: this.formEvento.value.ubicacion,
      contacto: this.formEvento.value.contacto,
      tipo: this.formEvento.value.contacto,
      detalle_fecha: this.formEvento.value.detalle_fecha
    };

    this.eventoService.createEvento(objeto).subscribe((response: any) => {
      alert('Evento creado con éxito');
      this.router.navigate(['inicio']);
    }, (error: any) => {
      alert('Error al crear el evento');
    });
  }
  volver(){
    this.router.navigate(['inicio'])
   }
}


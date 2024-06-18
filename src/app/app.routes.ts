import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { authGuard } from './custom/auth.guard';
import { EventoComponent } from './pages/evento/evento.component';
import { HistorialComponent } from './pages/historial/historial.component';

//definimos las rutas de las paginas
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard] },
  { path: 'evento', component: EventoComponent, canActivate: [authGuard] },
  { path: 'historial', component: HistorialComponent, canActivate: [authGuard] },
];

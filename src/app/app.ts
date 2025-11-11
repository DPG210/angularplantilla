import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlantillaFuncionSimple],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularplantilla');
}

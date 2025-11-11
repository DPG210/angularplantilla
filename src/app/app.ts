import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuPlantillas } from './components/menu-plantillas/menu-plantillas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuPlantillas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularplantilla');
}

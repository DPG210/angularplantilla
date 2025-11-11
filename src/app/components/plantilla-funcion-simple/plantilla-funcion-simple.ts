import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ServicesFunciones } from '../../service/services.funciones';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plantilla-funcion-simple',
  imports: [FormsModule],
  templateUrl: './plantilla-funcion-simple.html',
  styleUrl: './plantilla-funcion-simple.css',
})
export class PlantillaFuncionSimple implements OnInit{
    public funciones!: Array<any>;
    public plantilla!:Array<any>;
    @ViewChild ("selectfuncion") selectfuncion!: ElementRef;

    constructor(private _service: ServicesFunciones){}

    ngOnInit(): void {
      this._service.getFunciones().subscribe(response=>{
        this.funciones=response;
        console.log(this.funciones);
      })
    }

    mostrarPlantilla():void{
      let funcion= this.selectfuncion.nativeElement.value;

      this._service.getPlantilla(funcion).subscribe(response=>{
        this.plantilla=response;
      })
    }
}

import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ServicesFunciones } from '../../service/services.funciones';
import { FormsModule } from '@angular/forms';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple',
  imports: [FormsModule],
  templateUrl: './plantilla-funcion-multiple.html',
  styleUrl: './plantilla-funcion-multiple.css',
})
export class PlantillaFuncionMultiple implements OnInit{
    public funciones!: Array<string>;
    public plantilla:Array<Plantilla>;
    @ViewChild ("selectfunciones") selectFunctiones!: ElementRef;
    public funcionesSeleccionadas: Array<string>;

    constructor(private _service: ServicesFunciones){
      this.plantilla= new Array <Plantilla>;
      this.funcionesSeleccionadas= new Array<string>;
    }

    ngOnInit(): void {
      this._service.getFunciones().subscribe(response=>{
        this.funciones=response;
        
      })
    }



    mostrarPlantilla():void{
      let aux= new Array<string>();
      for(var option of this.selectFunctiones.nativeElement.options){
        if(option.selected== true){
          aux.push(option.value);
        }
      }
      this.funcionesSeleccionadas=aux;

       this._service.getPlantillaFunciones(aux).subscribe(response=>{
       this.plantilla=response;
        })
    }
}

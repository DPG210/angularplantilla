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
export class PlantillaFuncionMultiple {
  public funciones!: Array<string>;
    public plantilla!:Array<Plantilla>;
    @ViewChild ("selectfuncion") selectFunction!: ElementRef;

    constructor(private _service: ServicesFunciones){}

    ngOnInit(): void {
      this._service.getFunciones().subscribe(response=>{
        this.funciones=response;
        
      })
    }

    

    mostrarPlantilla():void{
      let funcion= this.selectFunction.nativeElement.value;

      // this._service.getPlantillaFetch(funcion).then(response=>{
      //   this.plantilla=response;
      // CON FETCH
      
       this._service.getPlantillaTipado(funcion).subscribe(response=>{
       this.plantilla=response;
        })//CON HTTP
    }
}

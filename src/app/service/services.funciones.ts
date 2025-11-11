import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Plantilla } from "../models/plantilla";

@Injectable()
export class ServicesFunciones{
    constructor(private _http: HttpClient){}
    getFunciones():Observable<Array<string>>{
        let request="api/plantilla/funciones"
        //DENTRO DE HTTP PODEMOS INDIRCAR EL TIPO DE OBJETO A DEVOLVER
        //MEDIANTE DIAMONS <T>
        return this._http.get<Array<string>>(environment.apiPlantilla+request);
    }

    getPlantilla(funcion:any):Observable<any>{
        let request="api/plantilla/plantillafuncion/"+funcion;

        return this._http.get(environment.apiPlantilla+request);
    }
    getPlantillaTipado(funcion:string):Observable<Array<Plantilla>>{
        let request="api/plantilla/plantillafuncion/"+funcion;

        return this._http.get<Array<Plantilla>>(environment.apiPlantilla+request);
    }

    getPlantillaFetch(funcion:string):Promise<Array<Plantilla>>{
        let request="api/plantilla/plantillafuncion/"+funcion;

        const plantillas= fetch(environment.apiPlantilla+request).then(response=> response.json());

        return plantillas;
    }

    getPlantillaFunciones(funciones:Array<string>): Observable<Array<Plantilla>>{
        //?function=Enfermera&function=Enfermero
        let datos="";
        for(var funcion of funciones){
            datos+= "funcion=" + funcion +"&";
        }
        //ELIMINAMOS EL ULTIMO CARATER PARA QUE NO QUEDE &
        datos= datos.substring(0,datos.length-1);
        let request="api/plantilla/plantillafunciones?"+datos;
        let url=environment.apiPlantilla+request;

        return this._http.get<Array<Plantilla>>(url);
    }
}
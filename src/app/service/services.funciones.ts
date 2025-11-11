import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicesFunciones{
    constructor(private _http: HttpClient){}
    getFunciones():Observable<any>{
        let request="api/plantilla/funciones"

        return this._http.get(environment.apiPlantilla+request);
    }

    getPlantilla(funcion:any):Observable<any>{
        let request="api/plantilla/plantillafuncion/"+funcion;

        return this._http.get(environment.apiPlantilla+request);
    }
}
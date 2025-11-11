import { Routes } from '@angular/router';
import { PlantillaFuncionSimple } from './components/plantilla-funcion-simple/plantilla-funcion-simple';
import { PlantillaFuncionMultiple } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple';

export const routes: Routes = [
    {path:"plantillasimple", component:PlantillaFuncionSimple},
    {path:"plantillamultiple", component:PlantillaFuncionMultiple}
];

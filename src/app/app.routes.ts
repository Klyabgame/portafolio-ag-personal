import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import('./portafolio/portafolio.route')
    },
    {
        path:'**',
        redirectTo:''
    }
];

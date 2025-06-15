import { Routes } from '@angular/router';
import { LayoutPortafolioComponent } from './layout/layout-portafolio/layout-portafolio.component';

export const portafolioRoutes: Routes = [
    {
        path:'',
        component:LayoutPortafolioComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];

export default portafolioRoutes;

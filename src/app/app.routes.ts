import { Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HerosListComponent } from './heros-list/heros-list.component';
export const routes: Routes = [
       {
          path:'hero',
          component: HerosComponent,
       },
       {
         path:'heros-list',
         component:HerosListComponent,
       },

];

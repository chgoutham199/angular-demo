import { Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { ForSwitchComponent } from './for-switch/for-switch.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { DeptComponent } from './dept/dept.component';
export const routes: Routes = [
  {
    path: 'hero',
    component: HerosComponent,
  },
  {
    path: 'heros-list',
    component: HerosListComponent,
  },
  {
    path: 'controlflow',
    component: ControlflowComponent,
  },
  {
    path: 'forswitch',
    component: ForSwitchComponent,
  },
  {
    path: 'forms',
    component: ReactiveformsComponent,
  },
  {
    path:'dept',
    component:DeptComponent
  }
];

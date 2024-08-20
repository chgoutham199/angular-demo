import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
   showdiv:boolean=false;

   toggle(){
    this.showdiv=!this.showdiv;
   }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {
     items: string []=['hello','world','angular','typescript'];
     constructor(private router: Router){
           

     }

     goToHome(){
      this.router.navigateByUrl('');
     }

     day:string=''
}

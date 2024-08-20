import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heros-list',
  standalone: true,
  imports: [],
  templateUrl: './heros-list.component.html',
  styleUrl: './heros-list.component.css'
})
export class HerosListComponent {
   
  constructor(private router:Router){

  }

      goToHeros(){
        this.router.navigateByUrl('/hero');
      }
      goToHome(){
        this.router.navigateByUrl('');
      }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { Route } from '@angular/router';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {

   constructor(private router:Router){

   }
     
   goToHome(){
    this.router.navigateByUrl('');
   }
}

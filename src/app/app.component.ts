import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { HerosComponent } from './heros/heros.component';
// import { HerosListComponent } from './heros-list/heros-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first';
}

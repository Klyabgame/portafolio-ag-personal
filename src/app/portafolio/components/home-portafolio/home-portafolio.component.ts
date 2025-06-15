import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'home-portafolio',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './home-portafolio.component.html',
  styleUrl:'./home-portafolio.component.css'
})



export class HomePortafolioComponent {

}

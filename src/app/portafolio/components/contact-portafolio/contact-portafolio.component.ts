import { Component, viewChildren } from '@angular/core';

const textpost='action="https://formsubmit.co/franzgavino3@gmail.com" method="POST"';

@Component({
  selector: 'contact-portafolio',
  standalone: true,
  imports: [],
  templateUrl: './contact-portafolio.component.html',
  styles: ``
})
export class ContactPortafolioComponent {

  formFormulario=viewChildren('#formFormulario');
  constructor(){
    console.log(this.formFormulario());
    
  }

}

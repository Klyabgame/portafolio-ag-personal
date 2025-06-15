import { Component } from '@angular/core';
import { skillUtils } from '../../../shared/utils/shared.utils';

@Component({
  selector: 'about-portafolio',
  standalone: true,
  imports: [],
  templateUrl: './about-portafolio.component.html',
  styles: ``
})
export class AboutPortafolioComponent {

  skill=skillUtils;

}

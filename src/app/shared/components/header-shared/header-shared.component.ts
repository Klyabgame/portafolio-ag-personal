import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-shared',
  standalone: true,
  imports: [UpperCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './header-shared.component.html',
  styles: ``
})
export class HeaderSharedComponent {

  menuHeaderEn=signal<string[]>([
    'home',
    'about',
    'proyect',
    'contact'
  ])

  menuHeaderEs=signal<string[]>([
    'inicio',
    'sobre mi',
    'proyectos',
    'contactame'
  ])

}

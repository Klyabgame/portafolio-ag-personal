import { Component, signal } from '@angular/core';
import { HeaderSharedComponent } from "../../../shared/components/header-shared/header-shared.component";
import { FooterSharedComponent } from "../../../shared/components/footer-shared/footer-shared.component";
import { HomePortafolioComponent } from "../../components/home-portafolio/home-portafolio.component";
import { AboutPortafolioComponent } from "../../components/about-portafolio/about-portafolio.component";
import { ProyectPortafolioComponent } from "../../components/proyect-portafolio/proyect-portafolio.component";
import { ContactPortafolioComponent } from "../../components/contact-portafolio/contact-portafolio.component";

@Component({
  selector: 'layout-portafolio',
  standalone: true,
  imports: [HeaderSharedComponent, FooterSharedComponent, HomePortafolioComponent, AboutPortafolioComponent, ProyectPortafolioComponent, ContactPortafolioComponent],
  templateUrl: './layout-portafolio.component.html',
  styles: ``
})
export class LayoutPortafolioComponent {

  



}

import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { FormUtils } from '../../../shared/utils/form.utils';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'contact-portafolio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-portafolio.component.html',
  styles: ``
})
export class ContactPortafolioComponent {

  modal=viewChild.required<ElementRef<HTMLDialogElement>>('modal');
  formUtils=FormUtils;
  http=inject(HttpClient);

  private fb= inject(FormBuilder);
  sendBoolean= signal<boolean>(false);

  formFormulario:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required]],
    message:['',[Validators.required]]
  })

  abrirModal():void{
    if(this.formFormulario.valid){
      this.modal().nativeElement.showModal();
    }
  }
  sendData(){
    this.sendBoolean.set(true);
    


    this.http.post('https://formsubmit.co/franzgavino3@gmail.com',this.formFormulario.value).subscribe((a)=>{
      console.log(a);
      
    });
    
  }
  sendFormulario(){
    this.formFormulario.markAllAsTouched();
    console.log('aea mongol');
    console.log(this.formFormulario.valid);
    console.log(this.formFormulario.value);
    
  }


}

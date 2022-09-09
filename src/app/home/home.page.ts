import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  fgroup: FormGroup


  constructor(private FormBuilder:FormBuilder) {
    this.fgroup = this.FormBuilder.group({
      'nome':['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(32),Validators.pattern('[a-zA-Z]*')])],
      'cpf':['',Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern('[0-9]*')])],
      'numero':['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern('[0-9]*')])]
    })
  }





  submitForm(){
    console.log(this.fgroup.value)
  }



}

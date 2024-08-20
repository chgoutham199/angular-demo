import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css',
})
export class ReactiveformsComponent {
  studentForm: FormGroup = new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    uname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    country: new FormControl('',[Validators.required]),
  });
  
  formData:any
  onSubmit(){
    this.formData=this.studentForm.value
  
  }
  onClear(){
    this.studentForm.reset();
  }

};

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http:HttpClient) { }

  readonly BaseURL = 'https://localhost:7122/api/';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords : this.fb.group(
      {
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    },{ validator: this.comparePasswords }
    )
    
  });

  comparePasswords(fb: FormGroup) {
     let ConfirmPasswordControl = fb.get('ConfirmPassword');
     if(ConfirmPasswordControl.errors == null || 'passwordMismatch' in ConfirmPasswordControl.errors)
     {
      if (fb.get('Password').value != ConfirmPasswordControl.value)
      
        ConfirmPasswordControl.setErrors({passwordMismatch: true});
      else 
        ConfirmPasswordControl.setErrors(null);
     
     }
  }

  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords,

    };
    return this.http.post(this.BaseURL + '/ApplicationUser/Register', body);


  }

}

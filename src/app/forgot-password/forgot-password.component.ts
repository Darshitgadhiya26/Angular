import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private auth :AuthService){}

  isSubmitted = false;

  title = 'reactive-form';


  forgotPassword: any = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.email
    ])

  
  });

  getControl(name: any): AbstractControl | null {
    return this.forgotPassword.get(name);
  }


  submitFn()
  {
    this.isSubmitted = true
     let data = this.forgotPassword.value;
    if(this.forgotPassword.valid)
    {
      this.auth.forgotPassword(data.email);
    }
  }

}

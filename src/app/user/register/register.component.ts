import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  isSubmitted = false;

  title = 'reactive-form';


  Register: any = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(5),
    ]),
  });

  getControl(name: any): AbstractControl | null {
    return this.Register.get(name);
  }


  submitFn()
  {
    this.isSubmitted = true
    let data = this.Register.value;
    console.log(data.email,data.password)
    if(this.Register.valid)
    {
      this.auth.register(data.name,data.email,data.password);
    }
  }


}

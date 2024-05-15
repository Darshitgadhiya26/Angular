import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { ToastClass } from 'src/app/shared/common';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private auth: AuthService, private toast: ToastService) { }

  isSubmitted = false;

  title = 'reactive-form';


  loginForm: any = new FormGroup({

    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(32),
      Validators.minLength(5),
    ]),

  });

  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }
  get l(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  submitFn() {
    this.isSubmitted = true
    let data = this.loginForm.value;
    if (this.loginForm.valid) {
      this.auth.login(data.email, data.password);
    } else {
      this.toast.openSnackBar('Enter Valid Data', ToastClass.success, 100000);
    }

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }

}

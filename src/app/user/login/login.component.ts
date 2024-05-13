import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private auth: AuthService, private _snackBar: MatSnackBar) { }

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
      this.openSnackBar('Enter Valid Data', 'snackbar-error', 3000);
    }

  }

  openSnackBar(message: string, panelClass: string, timer: number) {

    const config = new MatSnackBarConfig();
    config.panelClass = [panelClass];
    config.duration = timer > 0 ? timer : 3000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    this._snackBar.open(message, 'Ok', config);
  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }

}

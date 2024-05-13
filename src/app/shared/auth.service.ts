import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private fireauth: AngularFireAuth, private router: Router) {

    
  }

  //login
  login(email: any, password: any) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        alert('LOGIN SUCCESFULLY');
        localStorage.setItem('token', 'true');

        if(res.user?.emailVerified == true)
        {
          this.router.navigate(['dashboard']);
        }
        else
        {
          this.router.navigate(['varifyEmail'])
        }

      },
      (err: any) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  //Register
  register(name:any, email: any, password: any) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        this.sendEmailForVarification(res.user);
        alert('REGISTERD SUCCESFULLY');
        this.router.navigate(['/login']);
       
      },
      (err: any) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }
  
  sendEmailForVarification(user:any) {
    user.sendEmailVerification()
    .then((res :any)=>
    {
      this.router.navigate(['varifyEmail'])
    },
    (err: any) =>
    {
      alert(err.message);
    })
  }

  //logout
  logout() {
    this.fireauth.signOut()
    .then(() => {
      localStorage.removeItem('token')
        alert('LogOut SUCCESFULLY');
        this.router.navigate(['login']);
      },
      (err: any) => {
        alert(err.message);
        this.router.navigate(['login']);
      }
    );
  }

  //logout
  forgotPassword(email:any) {
    this.fireauth.sendPasswordResetEmail(email)
    .then(() => {
        this.router.navigate(['varifyEmail']);
      },
      (err: any) => {
        alert(err.message);
      }
    );
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}

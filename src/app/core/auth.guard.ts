import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data :DataService, private router:Router){}

  canActivate()
  {
    if(this.data.isLogedIn() )
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
      return false
    }
   
  }
 
  
}

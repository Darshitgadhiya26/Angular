import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, panelClass: string, timer: number) {

    const config = new MatSnackBarConfig();
    config.panelClass = [panelClass];
    config.duration = timer > 0 ? timer : 3000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';
    this._snackBar.open(message, 'Ok', config);
  }
}

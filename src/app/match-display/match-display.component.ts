import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchCreateComponent } from '../match-create/match-create.component';
@Component({
  selector: 'app-match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.css']
})
export class MatchDisplayComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMatchFormDialog() {
    const dialogRef = this.dialog.open(MatchCreateComponent, {
      width: '390px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Do something after dialog is closed if needed
    });
  }

}

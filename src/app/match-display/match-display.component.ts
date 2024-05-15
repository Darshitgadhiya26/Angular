import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchCreateComponent } from '../match-create/match-create.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Conditional } from '@angular/compiler';


@Component({
  selector: 'app-match-display',
  templateUrl: './match-display.component.html',
  styleUrls: ['./match-display.component.css']
})
export class MatchDisplayComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }


  dataSource: any;

  matches = [
    {
      MatchNo: 1,
      Team1Name: "Team A",
      Team2Name: "Team B",
      MatchDate: "2024-05-15",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100 // Assuming the currency is USD
    },
    {
      MatchNo: 2,
      Team1Name: "Team C",
      Team2Name: "Team D",
      MatchDate: "2024-05-16",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100
    },
    {
      MatchNo: 3,
      Team1Name: "Team E",
      Team2Name: "Team F",
      MatchDate: "2024-05-17",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 4,
      Team1Name: "Team G",
      Team2Name: "Team H",
      MatchDate: "2024-05-18",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 5,
      Team1Name: "Team I",
      Team2Name: "Team J",
      MatchDate: "2024-05-19",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 110
    },
    {
      MatchNo: 6,
      Team1Name: "Team A",
      Team2Name: "Team B",
      MatchDate: "2024-05-20",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100 // Assuming the currency is USD
    },
    {
      MatchNo: 7,
      Team1Name: "Team C",
      Team2Name: "Team D",
      MatchDate: "2024-05-21",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100
    },
    {
      MatchNo: 8,
      Team1Name: "Team E",
      Team2Name: "Team F",
      MatchDate: "2024-05-22",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 9,
      Team1Name: "Team G",
      Team2Name: "Team H",
      MatchDate: "2024-05-23",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 10,
      Team1Name: "Team I",
      Team2Name: "Team J",
      MatchDate: "2024-05-24",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 110
    },
    {
      MatchNo: 11,
      Team1Name: "Team A",
      Team2Name: "Team B",
      MatchDate: "2024-05-25",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100 // Assuming the currency is USD
    },
    {
      MatchNo: 12,
      Team1Name: "Team C",
      Team2Name: "Team D",
      MatchDate: "2024-05-26",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 100
    },
    {
      MatchNo: 13,
      Team1Name: "Team E",
      Team2Name: "Team F",
      MatchDate: "2024-05-27",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 14,
      Team1Name: "Team G",
      Team2Name: "Team H",
      MatchDate: "2024-05-28",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 120
    },
    {
      MatchNo: 15,
      Team1Name: "Team I",
      Team2Name: "Team J",
      MatchDate: "2024-05-29",
      Group: [{
        groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }]
      }, { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
      { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] },
      ],
      MatchFee: 110
    }
  ];

  displayedColumns: string[] = ['MatchNo', 'Team1Name', 'Team2Name', 'MatchDate', 'Group', 'MatchFee'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  openMatchFormDialog() {
    const dialogRef = this.dialog.open(MatchCreateComponent, {
      width: '390px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Do something after dialog is closed if needed
    });
  }

  getData() {
    this.dataSource = new MatTableDataSource(this.matches);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

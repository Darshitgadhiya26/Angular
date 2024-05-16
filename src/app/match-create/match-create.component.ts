import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent implements OnInit {
  user: any;
  matchForm!: FormGroup;
  groups: any[] = [
    { groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' },{ name: 'test3', Id: 'gfgd1236' },{ name: 'test4', Id: 'gfgd1236' },{ name: 'test5', Id: 'gfgd1236' }] },
    { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' },{ name: 'test3', Id: 'gfgd1236' },{ name: 'test4', Id: 'gfgd1236' },{ name: 'test5', Id: 'gfgd1236' }] },
    { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' },{ name: 'test3', Id: 'gfgd1236' },{ name: 'test4', Id: 'gfgd1236' },{ name: 'test5', Id: 'gfgd1236' }] }
  ];

  constructor(private _data: DataService, private afAuth: AngularFireAuth, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      console.log('User:', user);
      if (user) {
        this.user = user;
        console.log(user)
        // this.getGroups()
      }
    });

    this.matchForm = this.fb.group({
      matchNo: ['', Validators.required],
      team1Name: ['', Validators.required],
      team2Name: ['', Validators.required],
      matchDate: ['', Validators.required],
      group: [[], Validators.required],
      matchFee: ['', Validators.required]
    });
  }
  getGroups() {

  }

  onSubmit() {
    if (this.matchForm.valid) {
      // Generate shuffled array of player numbers
      const playerNumbers1 = this.shuffleArray([2, 4, 5, 1, 3]);
      const playerNumbers2 = this.shuffleArray([1, 3, 2, 5, 4]);

      // Assign player numbers to members of selected groups
      this.matchForm.value.group.forEach((selectedGroup: any) => {
        selectedGroup.listOfMembers.forEach((member: any, index: number) => {
          member.playerNo1 = playerNumbers1[index];
          member.playerNo2 = playerNumbers2[index]; 
        });
      });

      // Submit the form data
      console.log(this.matchForm.value);
      // Reset the form
      this.matchForm.reset();
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  onGroupSelectionChange(event: any) {
    const selectedGroups = event.source.value;
    // Update form value with selected groups
    this.matchForm.get('group')?.patchValue(selectedGroups);
  }
}

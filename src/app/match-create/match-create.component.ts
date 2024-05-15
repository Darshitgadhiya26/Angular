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
    { groupId: 1, name: 'Group A', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }] },
    { groupId: 2, name: 'Group B', listOfMembers: [{ name: 'test1', Id: 'gfgd12345' }, { name: 'test2', Id: 'gfgd1236' }] },
    { groupId: 3, name: 'Group C', listOfMembers: [{ name: 'test3', Id: 'gfgd12345' }] }
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
      // Submit the form data
      console.log(this.matchForm.value);
      // Reset the form
      this.matchForm.reset();
    }
  }

  onGroupSelectionChange(event: any) {
    const selectedGroups = event.source.value;
    // Update form value with selected groups
    this.matchForm.get('group')?.patchValue(selectedGroups);
  }
}

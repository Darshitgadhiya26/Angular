import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {
  user: any;
  groups: any;

  groupName: string = ''; // Variable to store the manually entered group name


  constructor(private groupService : DataService, private afAuth: AngularFireAuth, private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    this.afAuth.authState.subscribe(user => {
      console.log('User:', user);
      if (user) {
        this.user = user;
        this.getGroups()
      }
    });
    
  }

  getGroups(){
    this.groupService.getGroupsForUser(this.user.uid).subscribe(groups => {
      this.groups = groups.map(group => ({ ...group }));
    });
  }
  createGroup() {
    if (this.groupName.trim() === '') {
      alert('Please enter a group name.');
      return;
    }
    this.groupService.createGroup(this.groupName, this.user.uid).then(() => {
      // Update UI or notify user
      this.getGroups()
      this.groupName = '';
    }).catch(error => {
      console.error('Error creating group:', error);
    });
  }

  joinGroup(groupId: string) {
    const groupIndex = this.groups.findIndex((group: { id: string; }) => group.id === groupId);
    if (groupIndex === -1) {
      console.error('Group not found.');
      return;
    }
    
    const group = this.groups[groupIndex];
    if (group.members.length >= 5) {
      alert('This group already has 5 members. You cannot join.');
      return;
    }
    
    this.groupService.joinGroup(groupId, this.user.uid).then(() => {
      // Update the group's members array
      group.members.push(this.user.uid);
      // Update isJoined property in the local group object
      group.isJoined = true;
    }).catch(error => {
      console.error('Error joining group:', error);
    });
  }
  

  leaveGroup(groupId: string) {
    this.groupService.leaveGroup(groupId, this.user.uid).then(() => {
      // User left group successfully, update UI or notify user
    }).catch(error => {
      console.error('Error leaving group:', error);
    });
  }
}

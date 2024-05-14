import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import from compat version
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'; // Import from compat version

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  createGroup(name: string, owner: string): Promise<void> {
    const id = this.firestore.createId(); // Use AngularFirestore instance
    const data = { id, name, owner, members: [owner], isJoined: false };
    return this.firestore.collection('groups').doc(id).set(data);
  }

  joinGroup(groupId: string, userId: string): Promise<void> {
    const groupRef = this.firestore.collection('groups').doc(groupId);
    return groupRef.update({
      members: firebase.firestore.FieldValue.arrayUnion(userId),
      isJoined: true // Set isJoined to true
    });
  }

  leaveGroup(groupId: string, userId: string): Promise<void> {
    const groupRef = this.firestore.collection('groups').doc(groupId);
    return groupRef.update({
      members: firebase.firestore.FieldValue.arrayRemove(userId),
      isJoined: false
    });
  }

  getGroupsForUser(userId: string): Observable<any[]> {
    return this.firestore.collection('groups', ref => ref.where('members', 'array-contains', userId)).valueChanges();
  }


  isLogedIn() {
    return localStorage.getItem('token');
  }


  createMatch(data: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('Matches').doc(id).set(data);
  }
}

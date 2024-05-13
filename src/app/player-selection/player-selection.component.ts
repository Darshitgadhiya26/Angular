import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.css']
})
export class PlayerSelectionComponent implements OnInit {
  userId: string | undefined; // Assuming you have a way to get the current user's ID
  randomNumbers: number[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // Initialize or retrieve user's random number from Firebase
    this.getUserRandomNumber();
  }

  generateRandomNumber(): void {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Generate random number between 1 and 5
    // Update Firebase with the generated random number for the current user
    this.updateUserRandomNumber(randomNumber);
  }

  updateUserRandomNumber(randomNumber: number): void {
    this.firestore.collection('users').doc(this.userId).update({
      randomNumber: randomNumber
    }).then(() => {
      console.log('Random number updated successfully:', randomNumber);
      this.randomNumbers.push(randomNumber);
    }).catch(error => {
      console.error('Error updating random number:', error);
    });
  }

  // getUserRandomNumber(): void {
  //   this.firestore.collection('users').doc(this.userId).get().subscribe(doc => {
  //     if (doc.exists) {
  //       const data = doc.data();
  //       if (data?.randomNumber) {
  //         console.log('User random number:', data.randomNumber);
  //         this.randomNumbers.push(data.randomNumber);
  //       }
  //     }
  //   });
  // }
}

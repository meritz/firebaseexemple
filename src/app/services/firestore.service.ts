import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Dedicas } from '../models/dedicas';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createDedicas(nomEmet: string, nomDest: string, message: string, createdAt: number ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`dedicasList/${id}`).set({
      id,
      nomEmet,
      nomDest,
      message,
      createdAt,
    });
  }

  getSongList(): AngularFirestoreCollection<Dedicas> {
    return this.firestore.collection(`dedicasList`);
  }
}

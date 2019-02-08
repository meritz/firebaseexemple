import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dedicas } from '../models/dedicas';
import { FirestoreService} from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public dedicasList;
  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.dedicasList = this.firestoreService.getSongList().valueChanges();
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService} from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createDedicasForm: FormGroup;

  constructor(public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public firestoreService: FirestoreService,
              private router: Router,
              formBuilder: FormBuilder) {

                this.createDedicasForm = formBuilder.group({
                  nomEmet: ['', Validators.required],
                  nomDest: ['', Validators.required],
                  message: ['', Validators.required],
                });
               }

  ngOnInit() {
  }

  async createDedicas() {
    const loading = await this.loadingCtrl.create();

    const nomEmet = this.createDedicasForm.value.nomEmet;
    const nomDest = this.createDedicasForm.value.nomDest;
    const message = this.createDedicasForm.value.message;
    const createdAt = new Date().getTime();

    this.firestoreService.createDedicas(nomEmet, nomDest, message, createdAt)
    .then(
      () => {
        loading.dismiss().then(() => {
           this.router.navigateByUrl('');
          // this.router.navigate(['dedicace']);
        });
      },
      error => {
        console.error(error);
      }
    );

  return await loading.present();
   }
}

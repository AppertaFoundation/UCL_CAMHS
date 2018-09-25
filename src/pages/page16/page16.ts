import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Page15 } from '../page15/page15';
import { Contact } from '../contact/contact';


@Component({
  selector: 'page16',
  templateUrl: 'page16.html'
})
export class Page16 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "My coping plan";
  public inputData = ["", "", "", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 5;
  }


  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page15, {}, { animate: true, direction: 'back' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["Remember\nWe all have blips. If you have a blip remind yourself of your coping plan\n\n", "Warning signs - I'm starting to become stressed:\n", "-" + this.inputData[0] + "\n","-" + this.inputData[1] + "\n", "-" + this.inputData[2] + "\n\n", "Things I can do that help:\n", "-" + this.inputData[3] + "\n\n","People who can help me and when they are around?\n", "-" + this.inputData[4] + "\n\n", "Things I can say to myself:\n", "-" + this.inputData[5] + "\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }

}

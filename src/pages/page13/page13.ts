import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page12 } from '../page12/page12';
import { Page14 } from '../page14/page14';

@Component({
  selector: 'page13',
  templateUrl: 'page13.html'
})

export class Page13 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "A guide to problem solving - STOP";
  public inputData = ["", "", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 4;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  //Quick access to contact page
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page12, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page14, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["What is the problem? Ask yourself: who, when, why, where and what.\n\n","Who\n", "-"+ this.inputData[0] + "\n", "When\n", "-"+ this.inputData[1] + "\n", "Why\n", "-"+ this.inputData[2] + "\n", "Where\n", "-"+ this.inputData[3] + "\n", "What\n", "-"+ this.inputData[4] + "\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }

}

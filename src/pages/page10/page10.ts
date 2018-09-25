import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page9 } from '../page9/page9';
import { Page11 } from '../page11/page11';


@Component({
  selector: 'page10',
  templateUrl: 'page10.html'
})
export class Page10 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Let others know you don't feel good";
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
    this.navCtrl.setRoot(Page9, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page11, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["What can I say to my friends and family? How can they notice I am not feeling good?\n\n", "-" + this.inputData[0] + "\n", "-" + this.inputData[1] + "\n", "-" + this.inputData[2] + "\n", "-" + this.inputData[3] + "\n\n", "What can I ask them to do to help me out?\n", "-" + this.inputData[4] + "\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }


}

import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page3 } from '../page3/page3';
import { Page5 } from '../page5/page5';

@Component({
  selector: 'page4',
  templateUrl: 'page4.html'
})

export class Page4 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "How the brain manages situations and emotions";
  public inputData = [];
  pageData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = false;
    this.fieldsNumber = -1;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page3, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page5, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["We have 3 systems built into our brains which are all designed to look after us in different ways:\n\n", "Threat - external or internal (anger, anxiety, stress)\n\n", "Do something about this RIGHT NOW (achievement, excited, driven)\n\n","Look after yourself - SOOTHE (safe, secure, settled)\n\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }
}

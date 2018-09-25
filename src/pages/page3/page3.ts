import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact} from '../contact/contact';
import { Page2 } from '../page2/page2';
import { Page4 } from '../page4/page4';

@Component({
  selector: 'page3',
  templateUrl: 'page3.html'
})

export class Page3 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Things that are good in my life";
  public inputData = [""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;
    //Number of fields starting from 0
    this.fieldsNumber = 0;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page2, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page4, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["Share your favourite quote\n\n","My favourite quote is ",this.inputData[0]];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }
}

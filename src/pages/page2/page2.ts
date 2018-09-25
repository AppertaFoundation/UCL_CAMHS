import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact} from '../contact/contact';
import { Page1 } from '../page1/page1';
import { Page3 } from '../page3/page3';



@Component({
  selector: 'page2',
  templateUrl: 'page2.html'
})

export class Page2 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Weighting it up";
  public inputData = ["", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 1;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page1, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page3, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with the user input
    this.pageData = ["Weighting it up\n\n", "Anybody who has used self-harm has done this for a reason... often because of not knowing what else to do to feel better. However, we know that even though it can help, there are also often some things about self-harm that can make people feel worse again.\n", "Can you think of some good things, and not so good things about self harm? Try to weight it up\n\n", "Good things about self-harm\n", this.inputData[0] + "\n\n", "Bad things about self-harm\n", this.inputData[1] + "\n\n", "Balance your thoughts"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }
}

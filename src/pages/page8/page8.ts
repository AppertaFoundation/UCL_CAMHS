import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page7 } from '../page7/page7';
import { Page9 } from '../page9/page9';


@Component({
  selector: 'page8',
  templateUrl: 'page8.html'
})
export class Page8 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Shift your attention";
  public inputData = [];
  pageData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = false;

    //The number -1 is used as a flag to mark pages with no sharable content
    this.fieldsNumber = -1;
  }
  //----------------------------NAVIGATION SYSTEM-----------------------------//
  //Quick access to contact page
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page7, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page9, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["Grounding exercise, shift your attention to:\n\n5 things you can see\n4 things you can hear\n3 things you can touch\n2 things you can smell\n1 thing you can taste\n\nRemember It’s ok not to feel ok sometimes. We all have emotions that we find difficult and upsetting. These can take some practice... don’t worry if they don’t work first time! Give them a go again and see what helps.\n"]
    console.log(this.pageData);

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

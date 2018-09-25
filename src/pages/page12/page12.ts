import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page11 } from '../page11/page11';
import { Page13 } from '../page13/page13';

@Component({
  selector: 'page12',
  templateUrl: 'page12.html'
})

export class Page12 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Other options";
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
    this.navCtrl.setRoot(Page11, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page13, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["Less painful options:\n\n-Holding an ince cube in your hand.\n-Wearing an elastic band on your wrist and let it snap on your skin.\n-Having a cold shower.\n-Drawing in red pen where you would usually cut.\n-Punching a pillow or screaming into it.\n\nRemember\nYou may have often been told these ‘less painful’ ideas but REMEMBER how our brain works.If we are hurt in some way, our threat alarm bell will be activated... starting the whole cycle again."];
    
    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

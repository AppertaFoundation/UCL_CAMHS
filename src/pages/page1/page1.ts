import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Page2 } from '../page2/page2';
import { Contact } from '../contact/contact';



@Component({
  selector: 'page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "How to use the workbook";
  public inputData = [];
  pageData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = false;

    //The number -1 is used as a flag to mark pages with no sharable content
    this.fieldsNumber = -1;
  }
  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goForward() {
    this.navCtrl.setRoot(Page2, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//


  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page Data
    this.pageData = ["This workbook was written for people who sometimes use self harm to help them cope with difficult feelings.\n", "Everybody uses self-harm in different ways and for different reasons. You may use self-harm once and never do it again, or you may use it regularly as a way of coping with life’s stresses or overwhelming emotions\n",
      "If you understand the reasons for your self harming, its value and purpose in your life, and learn other strategies for coping, you may be empowered, and able to stop self harming, or decrease its impact on your life.\n", "The aim of this workbook is to help you to think about how you are feeling and how you cope with these feelings.\n", "It aims to then help you to develop a number of alternative ways of coping that you can use when you feel like this again in future.\n"];


    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

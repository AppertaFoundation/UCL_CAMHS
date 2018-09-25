import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page5 } from '../page5/page5';
import { Page7 } from '../page7/page7';

/*
  Generated class for the Page6 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page6',
  templateUrl: 'page6.html'
})
export class Page6 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Example of systems in action";
  public inputData = [];
  pageData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = false;

    //The number -1 is used as a flag to mark pages with no sharable content
    this.fieldsNumber = -1;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact(){
  this.navCtrl.push(Contact);
  }

  goBack(){
  	this.navCtrl.setRoot(Page5, {}, {animate: true, direction: 'back'});
  }

  goForward(){
  	this.navCtrl.setRoot(Page7, {}, {animate: true, direction: 'forward'});
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data 
    this.pageData = ["Emotion/situation = THREAT\nSelf-harm to cope = DRIVE\nBut self-harm = more THREAT(pain, harm)\nSo more discomfort\nThat drives to more self-harm\nThat restarts the cycle\n\nWhen our THREAT system activates we have two options.\nWe can:\n\n- Do something now - which is usually to try and escape the threat or avoid it in some way. Sometimes this is needed, we might actually need to get out.\n\n- Be kind to ourselves - we can’t always escape the threat as there is likely to always be something we don’t like and we can’t escape our own emotions."];


    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

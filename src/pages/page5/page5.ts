import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page4 } from '../page4/page4';
import { Page6 } from '../page6/page6';
/*
  Generated class for the Page5 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page5',
  templateUrl: 'page5.html'
})
export class Page5 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "The 3 systems";
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

  goBack() {
    this.navCtrl.setRoot(Page4, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page6, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//


  openShare() {
    //Page data
    this.pageData = ["THREAT system\nThis is inbuilt in everybody and is designed to keep us safe by alerting us to possible dangers/threats. We NEED this and can’t just switch it off.\nThe THREAT system is what activates us to do something (about the threat).\n\nDrive system\nThe threat could be outside of us but it can also include our own emotions. Some emotions can feel uncomfortable or difficult and we might just want them to stop.\nThis can be when our DRIVE system takes over and tries to get us to do something straight away.\n\nSOOTHE system\nSometimes this is ok, for example when we are faced with danger, that you need to get away from, but sometimes we can’t just escape.\nThis is when we need our SOOTHE system to help us to learn how to be kind to ourselves. Acknowledge our emotions and do something to help us to be able to cope even if they are difficult.\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

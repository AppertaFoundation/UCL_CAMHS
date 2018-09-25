import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page6 } from '../page6/page6';
import { Page8 } from '../page8/page8';

/*
  Generated class for the Page7 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page7',
  templateUrl: 'page7.html'
})

export class Page7 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Some ideas of other ways of helping myself feel better";
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
    this.navCtrl.setRoot(Page6, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page8, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["Phone/ talk to someone you feel close to—even a general conversation may help you to feel calmer.\n\nArts and crafts—spending time making things may help you to feel calmer and give chance to move away from difficult thoughts.\n\nListening to happy or comforting music.\n\nWrite your thoughts or feelings down—keep them or rip up the paper and throw it away. Throwing them away can help you to remind yourself that you can take control of your thoughts.\n\nGoing for a walk or try out some other exercise.\n\nGoing to a place where you feel safe.\n\nWatch a film or TV show that you enjoy.\n\nHaving a relaxing bath or shower."];


    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }
}

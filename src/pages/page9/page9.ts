import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page8 } from '../page8/page8';
import { Page10 } from '../page10/page10';


@Component({
  selector: 'page9',
  templateUrl: 'page9.html'
})
export class Page9 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Warning signs";
  public inputData = ["", "", "", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 5;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  //Quick access to contact page
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page8, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page10, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//
  
  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with data
    this.pageData = ["Can you think of any early or late signs that you are becoming stressed or upset, and more likely to use self harm?\n\nThese may include things like not sleeping, feeling annoyed about everything, or crying a lot. It can be useful to recognise these signs so that you can start to use coping strategies and get some support before you start to feel worse.\n\n","Sign:\n", this.inputData[0]+"\n", "Action:\n", this.inputData[1] + "\n\n", "Sign:\n", this.inputData[2]+"\n", "Action:\n", this.inputData[3] + "\n\n", "Sign:\n", this.inputData[4] + "\n", "Action:\n", this.inputData[5] + "\n\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }


}

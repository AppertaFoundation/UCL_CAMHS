import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page13 } from '../page13/page13';
import { Page15 } from '../page15/page15';


@Component({
  selector: 'page14',
  templateUrl: 'page14.html'
})
export class Page14 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "A guide to problem solving - THINK";
  public inputData = ["", "", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 4;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  //Quick access to contact page
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page13, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page15, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["Try to think of as many solutions as you can. Don’t worry about whether they’re good or bad ideas, just brainstorm!\n\n","Solution 1\n", "-" + this.inputData[0] + "\n", "Solution 2\n", "-" + this.inputData[1] + "\n", "Solution 3\n", "-" + this.inputData[2] + "\n", "Solution 4\n", "-" + this.inputData[3] + "\n", "Solution 5\n", "-" + this.inputData[4] + "\n"];
    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }

}

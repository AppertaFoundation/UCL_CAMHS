import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page14 } from '../page14/page14';
import { Page16 } from '../page16/page16';


@Component({
  selector: 'page15',
  templateUrl: 'page15.html'
})
export class Page15 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "A guide to problem solving - EVALUATE";
  public inputData = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 14;
  }

  //----------------------------NAVIGATION SYSTEM-----------------------------//
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page14, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page16, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["What are the pros and cons of each solution?\n\n",
      "Solution1\n", "Pros\n ", "-" + this.inputData[0] + "\n", "Cons\n", "-" + this.inputData[1] + "\n", "Rating\n", "-" + this.inputData[2] + "\n\n", "Solution2\n", "Pros\n ", "-" + this.inputData[3] + "\n", "Cons\n", "-" + this.inputData[4] + "\n", "Rating\n", "-" + this.inputData[5] + "\n\n", "Solution3\n", "Pros\n ", "-" + this.inputData[6] + "\n", "Cons\n", "-" + this.inputData[7] + "\n", "Rating\n", "-" + this.inputData[8] + "\n\n", "Solution4\n", "Pros\n ", "-" + this.inputData[9] + "\n", "Cons\n", "-" + this.inputData[10] + "\n", "Rating\n", "-" + this.inputData[11] + "\n\n", "Solution5\n", "Pros\n ", "-" + this.inputData[12] + "\n", "Cons\n", "-" + this.inputData[13] + "\n", "Rating\n", "-" + this.inputData[14] + "\n\n", "Pick the best solution and try it out!\nRemember There are no right answers!If your solution worked then GREAT! If it didn't, either try it again or go back to the drawing board and pick another solution to try out.\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });

    myModal.present();
  }

}

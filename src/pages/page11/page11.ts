import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';

import { Contact } from '../contact/contact';
import { Page10 } from '../page10/page10';
import { Page12 } from '../page12/page12';

/*
  Generated class for the Page11 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page11',
  templateUrl: 'page11.html'
})

export class Page11 {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Ways I can be kind to myself";
  public inputData = ["", "", "", ""];
  pageData: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = true;

    //fieldsNumber is the number of user insertable fields starting from 0
    this.fieldsNumber = 3;
  }
  //----------------------------NAVIGATION SYSTEM-----------------------------//
  //Quick access to contact page
  goContact() {
    this.navCtrl.push(Contact);
  }

  goBack() {
    this.navCtrl.setRoot(Page10, {}, { animate: true, direction: 'back' });
  }

  goForward() {
    this.navCtrl.setRoot(Page12, {}, { animate: true, direction: 'forward' });
  }
  //--------------------------------------------------------------------------//

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data with user input
    this.pageData = ["These are some things I can do to be kind to myself and look after myself at times when I’m not feeling so good.\n\nWrite down some suggestions:\n Remember Have a few options, its always useful to have a back up to try if you think something doesn’t work.\n\n", "-" + this.inputData[0] + "\n", "-" + this.inputData[1] + "\n", "-" + this.inputData[2] + "\n", "-" + this.inputData[3] + "\n"];

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

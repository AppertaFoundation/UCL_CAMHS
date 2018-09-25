import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { SharePopup } from '../share-popup/share-popup';
import { InAppBrowser } from 'ionic-native';



@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class Contact {
  hasSharable: boolean;
  fieldsNumber: number;
  pageTitle: string = "Useful Contact";
  public inputData = [];
  pageData: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.hasSharable = false;

    //The number -1 is used as a flag to mark pages with no sharable content
    this.fieldsNumber = -1;
  }

  //Open WebPage
  openPage(url) {
  new InAppBrowser(url, '_system');
  }

  //Open modal popup and passes the page data to be sent via mail
  openShare() {
    //Page data
    this.pageData = ["Further contacts\n\n","If you would like further information, more help working on your self harming, or to take this work further you can contact: CAMHS - 01204 390659\n\n","Young minds:\n", "http://www.youngminds.org.uk/\n\n", "Transgender difficulties:\n", "http://www.mermaidsuk.org.uk/\n\n", "LG Foundation Manchester:\n", "https://lgbt.foundation/\n\n", "Anxiety Youth BC website:\n", "http://youth.anxietybc.com/\n\n", "National self-harm network:\n", "http://www.nshn.co.uk/\n\n", "Bereavement:\n", "http://www.winstonswish.org.uk/\n\n", "The Hideout:\n", "http://thehideout.org.uk/\n\n", "Childline:\n", "https://www.childline.org.uk/\n\n", "Papyrus:\n", "https://www.papyrus-uk.org/\n\n", "Teenshealth:\n", "https://teenshealth.org/en/teens/#catmental-health\n\n"];

    console.log(this.pageData);

    let myModal = this.modalCtrl.create(SharePopup, { shareKey: this.hasSharable, pageData: this.pageData, inputData: this.inputData, fieldsNumber: this.fieldsNumber, pageTitle: this.pageTitle });
    myModal.present();
  }

}

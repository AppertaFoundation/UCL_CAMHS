import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../email-validator/email-validator';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'share-popup',
  templateUrl: 'share-popup.html'
})
export class SharePopup {
  //Forms to validate name and email fields
  public emailForm;
  public nameForm;
  public email_address: any;
  public feedback_name: string = "";

  //Data from each page
  hasSharable: boolean;
  isFilled: boolean;
  pageData: string[];
  inputData: string[];
  fieldsNumber: number;
  pageString: string;
  pageTitle: string;
  subject: string;

  //Flag used to assert that the page user wants to send the page even if empty
  confirmationFlag: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private socialSharing: SocialSharing) {
    //Data from each page
    this.hasSharable = navParams.get('shareKey');
    this.pageTitle = navParams.get('pageTitle');
    this.pageData = navParams.get('pageData');
    this.inputData = navParams.get('inputData');
    this.fieldsNumber = navParams.get('fieldsNumber');

    //subject of the email
    this.subject = this.pageTitle + " page feedback";

    //Updates the boolean of the page, true if it complete, false otherwise
    this.isFilled = this.checkFilled(this.fieldsNumber);

    //Confirmation flag to send the page even if the user has not completed all the fields
    this.confirmationFlag = false;

    //Email validator
    this.emailForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    })

    //Name validator
    this.nameForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })

  }

  closeModal() {
    this.navCtrl.pop();
  }

  //Check for sharable content in the page to select what elements/buttons
  //to display
  checkSharable() {
    return this.hasSharable;
  }

  //Swap the confirmation flag that changes what is being displayed in the HTML
  swapConfirmationFlag() {
    if (this.confirmationFlag == true) { this.confirmationFlag = false; }
    else this.confirmationFlag = true;
  }

  //Swap the isFilled flag if the user decides to send the page even when empty
  swapIsFilled() {
    if (this.isFilled) { this.isFilled = false; }
    else { this.isFilled = true; }
  }


  //Iterates through all the user data to confirm that all fields are complete
  checkFilled(fields: number) {
    if (fields == -1) { return true; }
    if (fields > 0) {
      return (this.inputData[fields] != "" && this.checkFilled(fields - 1));
    }
    else {
      return (this.inputData[fields] != "");
    }
  }

  //Converts array of data of the page into a string that is going to be send via mail
  pageToString() {
    let pageString: string = "";
    for (var data of this.pageData) {
      if (data) {
        pageString += data;
      }
    }
    return pageString;
  }

  //Email sharing using SocialSharing plugin
  sendPage() {
    this.isFilled = this.checkFilled(this.fieldsNumber);
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
    // Share via email
    this.pageString = this.pageToString();
    this.pageString = "This the feedback from the \"Hope not Harm\" App by the user " + this.feedback_name + "\n\n" + this.pageString;
    this.socialSharing.shareViaEmail(this.pageString, this.subject, [this.email_address]).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}

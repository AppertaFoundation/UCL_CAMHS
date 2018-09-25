import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

import { Team } from '../pages/team/team';
import { Contact } from '../pages/contact/contact';
import { MyApp } from './app.component';
import { SharePopup } from '../pages/share-popup/share-popup';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { Page7 } from '../pages/page7/page7';
import { Page8 } from '../pages/page8/page8';
import { Page9 } from '../pages/page9/page9';
import { Page10 } from '../pages/page10/page10';
import { Page11 } from '../pages/page11/page11';
import { Page12 } from '../pages/page12/page12';
import { Page13 } from '../pages/page13/page13';
import { Page14 } from '../pages/page14/page14';
import { Page15 } from '../pages/page15/page15';
import { Page16 } from '../pages/page16/page16';
import { EmailValidator } from '../pages/email-validator/email-validator';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
    Contact,
    Team,
    SharePopup,
    EmailValidator

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    Page15,
    Page16,
    Contact,
    Team,
    SharePopup,
    EmailValidator
  ],
  providers: [SocialSharing, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {

}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Team } from '../pages/team/team';

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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = Page1;
  pages: Array<{ title: string, component: any }>;
  constructor(public platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'How to use the workbook', component: Page1 },
      { title: 'Weighing it up', component: Page2 },
      { title: 'Things that are good in my life', component: Page3 },
      { title: 'How the brain manages situations and emotions', component: Page4 },
      { title: 'The 3 systems', component: Page5 },
      { title: 'Example of systems in action', component: Page6 },
      { title: 'Some ideas of other ways of helping myself to feel better', component: Page7 },
      { title: 'Shift your attention', component: Page8 },
      { title: 'Warning signs', component: Page9 },
      { title: 'Let others know you don\'t feel good', component: Page10 },
      { title: 'Ways I can be kind to myself', component: Page11 },
      { title: 'Other options', component: Page12 },
      { title: 'A guide to problem solving - STOP', component: Page13 },
      { title: 'A guide to problem solving - THINK', component: Page14 },
      { title: 'A guide to problem solving - EVALUATE & ACT', component: Page15 },
      { title: 'My coping plan', component: Page16 }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openTeam() {
    this.nav.setRoot(Team, {}, {});
  }
}

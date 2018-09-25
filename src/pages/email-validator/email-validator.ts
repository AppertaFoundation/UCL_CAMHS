import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'email-validator',
  templateUrl: 'email-validator.html'
})
export class EmailValidator {
  static isValid(control: FormControl) {
    
    //Validation pattern for email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);

    if (re) {
      return null;
    }

    return { "invalidEmail": true };
  }

}

import {
  LightningElement
} from 'lwc';

export default class AccountManageLDSForm extends LightningElement {

  recordId;

  successHandler(event) {
    this.recordId = event.detail.id;
  }
}

import {
  LightningElement
} from 'lwc';
// While editing fields name is salesforce to show this LWC dependency
// use the hardcode declaration like below
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Website_Field from '@salesforce/schema/Account.Website';

export default class AccountRecordFormLDS extends LightningElement {

  recordId;

  fieldsArray = [
    Name_Field,
    Phone_Field,
    Website_Field
  ];
  successHandler(event) {
    this.recordId = event.detail.Id;
  }
}

import {
  LightningElement
} from 'lwc';
import {
  createRecord
} from "lightning/uiRecordApi";

export default class AccountManageLDS extends LightningElement {

  accName;
  accPhone;
  accUrl;

  accountName(event) {
    this.accName = event.target.value;
  }

  accountPhone(event) {
    this.accPhone = event.target.value;
  }

  accountUrl(event) {
    this.accUrl = event.target.value;
  }

  createAccount() {
    const fields = {
      'Name': this.accName,
      'Phone': this.accPhone,
      'Website': this.accUrl
    };
    const recordInput = {
      apiName: 'Account',
      fields
    };
    console.log(recordInput);
    createRecord(recordInput).then(response => {
      console.log("New account ID is: ", response.id);
    }).catch(error => {
      console.log("Error occured:", error.body.message);
    });

  }
}

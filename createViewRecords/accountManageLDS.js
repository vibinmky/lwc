import {
  LightningElement,
  wire
} from 'lwc';
import {
  createRecord,
  getRecord
} from "lightning/uiRecordApi";

const fieldsArray = ['Account.Name', 'Account.Phone', 'Account.Website'];

export default class AccountManageLDS extends LightningElement {

  accName;
  accPhone;
  accUrl;

  recordId;
  // fields array for viewing record


  // wire for viewing record dynamically
  @wire(getRecord, {
    recordId: '$recordId',
    fields: fieldsArray
  }) accountDetails;

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
    
    createRecord(recordInput).then(response => {
      console.log("New account ID is: ", response.id);
      this.recordId = response.id;
    }).catch(error => {
      console.log("Error occured:", error.body.message);
    });

  }

  // for display account details in UI
  get retName() {
    if (this.accountDetails.data) {
      return this.accountDetails.data.fields.Name.value;
    }
  }

  get retPhone() {
    if (this.accountDetails.data) {
      return this.accountDetails.data.fields.Phone.value;
    }
  }

  get retUrl() {
    if (this.accountDetails.data) {
      return this.accountDetails.data.fields.Website.value;
    }
  }
}

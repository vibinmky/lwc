import {
  LightningElement
} from 'lwc';
// any name can given
import accountDetails from '@salesforce/apex/imperativeCallAccount.getAccounts';
import {
  ShowToastEvent
} from 'lightning/platformShowToastEvent';

export default class ImperativeCallAccount extends LightningElement {

  noOfAccounts;
  accounts;

  get responseReceived() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

  noOfAccountsHandler(event) {
    this.noOfAccounts = event.target.value;
  }

  getAccounts() {
    accountDetails({
      noOfAcc: this.noOfAccounts
    }).then(response => {
      this.accounts = response;
      const tEvent = new ShowToastEvent({
        title: 'Account Loaded',
        message: this.noOfAccounts + ' loaded Successfully',
        variant: 'success'
      });
      this.dispatchEvent(tEvent);
    }).catch(error => {
      console.log("Error Occured:", error.body.message);
      const tEvent = new ShowToastEvent({
        title: 'Error',
        message: error.body.message,
        variant: 'error'
      });
      this.dispatchEvent(tEvent);
    });
  }
}

import {
  LightningElement
} from 'lwc';
// any name can given
import accountDetails from '@salesforce/apex/imperativeCallAccount.getAccounts'

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
    }).catch(error => {
      console.log("Error Occured:", error.body.message);
    });
  }
}

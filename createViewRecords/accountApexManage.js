import {
  LightningElement,
  wire
} from 'lwc';
// any name can given
import accountDetails from '@salesforce/apex/accountManage.getAccounts'
export default class AccountApexManage extends LightningElement {



  @wire(accountDetails)
  accounts;

  get responseReceived() {
    if (this.accounts) {
      return true;
    }
    return false;
  }

}

  import {
    LightningElement
  } from 'lwc';

  import {
    NavigationMixin
  } from 'lightning/navigation';

  export default class NavigationService extends NavigationMixin(LightningElement) {

    websiteHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
        attributes: {
          url: 'https://www.google.co.in'
        }
      });
    }


    accountHomeHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
          objectApiName: 'Account',
          actionName: 'home'
        }
      });
    }

    createContactHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
          objectApiName: 'Contact',
          actionName: 'new'
        }
      });
    }

    opportunityListViewHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
          objectApiName: 'Opportunity',
          actionName: 'list'
        }
      });
    }

    caseRecordHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
          recordId: '500N000000HGBuAIAX',
          objectApiName: 'Case',
          actionName: 'view'
        }
      });
    }

    ldsTabHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
          apiName: 'Account_LDS'
        }
      });
    }

    previewFileHandler() {
      this[NavigationMixin.Navigate]({
        type: 'standard__namedPage',
        attributes: {
          pageName: 'filePreview'
        },
        state: {
          recordIds: '069N0000001kJ8dIAE,069N0000001kJ8YIAU',
          selectedRecordId: '069N0000001kJ8dIAE'
        }
      });
    }
  }

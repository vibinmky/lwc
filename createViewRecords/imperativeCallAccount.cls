public with sharing class imperativeCallAccount {
    
     @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts(Integer noOfAcc){
        
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT :noOfAcc];
    }
}

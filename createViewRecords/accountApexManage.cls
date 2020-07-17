public with sharing class accountManage {
    
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts(){
        
        return [SELECT Id, Name, Phone, Website FROM Account LIMIT 10];
    }
}

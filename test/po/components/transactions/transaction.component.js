const BaseComponent = require("../common/base.component");

class TransactionComponent extends BaseComponent{
    constructor(){
        super('.expense-grid-container');
    }
   
   get AddNewTransactionBtn(){
    return this.rootEl.$('#addexpense');
   }

   get DeleteTransactionBtn(){
    return this.rootEl.$('#grid_delete');
   }

   get EditTransactionBtn(){
    return this.rootEl.$('#grid_edit');
   }
   
    item(param){
        const selectors = {
            //addTransaction:"//button[@id='addexpense']",
            modal:"//div[@id='addexpenseDialog']",
            date: "#datepicker",
            itemsCount: ".e-pagecountmsg",
            row1: '[aria-rowindex="0"]',
            checkbox:".e-gridchkbox",
            description: ".description-section",
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = TransactionComponent;


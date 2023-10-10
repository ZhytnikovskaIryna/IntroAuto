const BaseComponent = require("./base.component");

class TransactionComponent extends BaseComponent{
    constructor(){
        super('.expense-grid-container');
    }
   
    item(param){
        const selectors = {
            addTransaction:"//button[@id='addexpense']",
            modal:"//div[@id='addexpenseDialog']",
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = TransactionComponent;


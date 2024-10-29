const BaseComponent = require("../common/base.component");

class AddTransactionComponent extends BaseComponent{
    constructor(){
        super('#addexpenseDialog');
    }
    get addButton(){
        return this.rootEl.$(".e-add");
    }

    get cancelButton(){
        return this.rootEl.$(".e-cancel");
    }
    input(param){
        const selectors = {
            income:"#incomeradio",
            expense: "#expenseeradio",
            time: "#timepicker",
            date:"#datepicker",
            amount:"#amount",
            category: ".Category",
            description: "#description",
            cash: "#cashradio",
            debit: "#debitradio",
            credit: "#creditradio",
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = AddTransactionComponent;


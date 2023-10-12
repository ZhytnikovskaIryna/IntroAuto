const BaseComponent = require("../base.component");

class AddTransactionComponent extends BaseComponent{
    constructor(){
        super('#addexpenseDialog_dialog-content');
    }
   
    item(param){
        const selectors = {
            income:"#incomeradio",
            expense: "#expenseeradio",
            time: "#timepicker",
            date:"#datepicker",
            amount:"#amount",
            category: "e-float-input e-control-wrapper e-input-group Category e-ddl e-lib e-keyboard",
            description: "description",
            cash: "#cashradio",
            debit: "#debitradio",
            credit: "#creditradio",
            add: "b.e-control e-btn e-lib e-info e-add e-primary e-flat",
            cancel:"e-control e-btn e-lib e-outline e-cancel e-flat",
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = AddTransactionComponent;


const BaseComponent = require("../common/base.component");

class HomeComponent extends BaseComponent{
    constructor(){
        super('.control-section');
    }
   
    item(param){
        const selectors = {
            balance_graph:"#balance_Series_0_Point_5_Symbol",
            
        };
        return this.rootEl.$(selectors[param]);
    }
}

module.exports = HomeComponent;


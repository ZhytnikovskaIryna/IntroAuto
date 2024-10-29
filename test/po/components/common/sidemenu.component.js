const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent{
    constructor(){
        super('#sidebar-wrapper');
    }
    get name(){
        return this.rootEl.$('#user-name');
    }
    get balance(){
        return this.rootEl.$('#current-balance');
    }
    
    item(param){
        const selectors = {
            dashboard:'#nav-overview',
            transactions:'#nav-expense',
            about:'#nav-about',
        };
        return this.rootEl.$(selectors[param].toLowerCase());
    }
}

module.exports = SideMenuComponent;


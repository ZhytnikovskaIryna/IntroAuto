const BaseComponent = require("../common/base.component");

class DeleteTRansactionDialogComponent extends BaseComponent{
    constructor(){
        super('#confirmDialog');
    }
   

   get DeleteDialogOkButton(){
    return this.rootEl.$(".e-ok");
   }

   get DeleteDialogCancelButton(){
    return this.rootEl.$(".e-no");
   }

}

module.exports = DeleteTRansactionDialogComponent;


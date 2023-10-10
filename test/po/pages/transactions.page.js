const BasePage = require("./basepage");
const {Transaction}=require('./../components')

class TransactionsPage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/expense");
      this.transaction = new Transaction();
   }
}

module.exports = TransactionsPage;

const BasePage = require("./basepage");
const {Transaction}=require('./../components');
const {AddTransaction}=require('./../components');
const {DeleteTransactionDialog}=require('./../components');

class TransactionsPage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/expense");
      this.transaction = new Transaction();
      this.addTransaction = new AddTransaction();
      this.deleteTransactionDialog = new DeleteTransactionDialog();

 
     
   }

}

module.exports = TransactionsPage;

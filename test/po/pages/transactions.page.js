const BasePage = require("./basepage");
const {Transaction, DeleteTransaction}=require('./../components');
const {AddTransaction}=require('./../components');
const {DeleteTransactionDialog}=require('./../components');

class TransactionsPage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/expense");
      this.transaction = new Transaction();
      this.addTransaction = new AddTransaction();
      this.deleteTransactionDialog = new DeleteTransactionDialog();

      browser.addCommand("waitAndClick", async function () {
        await this.waitForDisplayed()
        await this.click()
    }, true)
      
   }

}

module.exports = TransactionsPage;

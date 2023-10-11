const BasePage = require("./basepage");
const {Transaction}=require('./../components')

class TransactionsPage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/expense");
      this.transaction = new Transaction();

      browser.addCommand("waitAndClick", async function () {
        // `this` is return value of $(selector)
        await this.waitForDisplayed()
        await this.click()
    }, true)
      
   }

}

module.exports = TransactionsPage;

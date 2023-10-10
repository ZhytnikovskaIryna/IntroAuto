const BasePage = require("./basepage");

class HomePage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/dashboard");
   }
}

module.exports = HomePage;
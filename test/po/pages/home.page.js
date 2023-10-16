const BasePage = require("./basepage");
const {Home}=require('./../components');

class HomePage extends BasePage{
   constructor(){
      super("/showcase/javascript/expensetracker/#/dashboard");
      this.home=new Home();
   }
}

module.exports = HomePage;
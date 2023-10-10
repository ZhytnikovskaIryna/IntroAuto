const HomePage = require("./home.page");
const TransactionsPage = require("./transactions.page");

/**
 * @param name {'home'|'transaction'} 
 * @returns {HomePage|TransactionsPage}
 */
function pages(name){
    const items ={
        home: new HomePage(),
        transactions: new TransactionsPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    HomePage,
    TransactionsPage,
    pages
}
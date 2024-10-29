const{pages}=require('./../po');

describe("Advanced tests for Expense Tracker Transaction page",()=> {

    beforeEach(async function () {
        transactionPage = await pages('transactions');
        await transactionPage.open();
      });

    it("Highlight Search field with blue color using execute command",async()=>{
      
      const search = await transactionPage.transaction.item("search");
      await browser.execute(function(search) {
        search.style.border = 'blue solid 2px';
      }, search);
      await expect(search).toHaveAttributeContaining("style","border: 2px solid blue;");
    })

})

const{pages}=require('../po');

describe("Advnced tests for Expense Tracker home page",()=> {

    beforeEach(async function () {
        homePage = await pages('home');
        await homePage.open();
    });

    it("Verify Account-Balance chat is fully loaded ",async()=>{
        // const balance = await transactionPage.transaction.item('balance');  
      await browser.waitUntil(
        async () => await homePage.home.item('balance_graph').isDisplayed() === true,
        { timeout: 5000, interval: 600, timeoutMsg: "not loaded" }
        );
    })
})
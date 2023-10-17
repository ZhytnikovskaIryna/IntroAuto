const{pages}=require('./../po');

describe("Advanced tests for Expense Tracker home page",()=> {

    beforeEach(async function () {
        homePage = await pages('home');
        await homePage.open();
    });

    it("Verify Account-Balance chat is fully loaded ",async()=>{ 
      await browser.waitUntil(
        async () => await homePage.home.item('balance_graph').isDisplayed() === true,
        { timeout: 5000, interval: 600, timeoutMsg: "not loaded" }
        );
    })

    it("Verify Color of Transaction button in SideMenu on mouse over ",async()=>{
        const elem = await pages('home').sideMenu.item('transactions');
        await elem.moveTo();
        const color = await elem.getCSSProperty('background');
        await expect(color.value).toEqual("none 0% 0% auto repeat padding-box border-box scroll rgba(239, 244, 255, 1)")
    })
})
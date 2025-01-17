const{pages}=require('./../po');

describe("Basic tests for Expense Tracker home page",()=> {

    beforeEach(async function () {
        await pages('home').open();
      });

    it("Verify title of the page",async()=>{
        const pageTitle = await browser.getTitle();
        await expect(pageTitle).toEqual("Essential JS 2 for JavaScript (ES5) - Expense Tracker");
    })

    it("Verify that balance is displayed in side menu",async()=>{
        await expect(await pages('home').sideMenu.balance.getText()).toEqual("$5,240");
    })

    it("Verify that Transaction tab is opened when this menu option is selected",async()=>{
        await pages('home').sideMenu.item('transactions').click();
        const elem = await pages('transactions').transaction.AddNewTransactionBtn;
        await elem.waitForDisplayed();
        await expect(await elem.isDisplayed()).toEqual(true);

    })

    it("Verify that About tab is opened when this menu option is selected",async()=>{
        await pages('home').sideMenu.item('about').click();
        const elem = await $('.about-heading');
        await elem.waitForDisplayed();
        await expect(await elem.isDisplayed()).toEqual(true);

    })
})
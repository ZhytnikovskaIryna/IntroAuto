
const{pages}=require('./../po');

describe("Basic tests for Expense Tracker home page",()=> {
    
   /* beforeEach(()=>{
        browser.addCommand("waitAndClick", async function () {
            // `this` is return value of $(selector)
            await this.waitForDisplayed()
            await this.click()
        }, true)
      });
*/
    it("Verify title of the page",async()=>{
        await pages('home').open();
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Essential JS 2 for JavaScript (ES5) - Expense Tracker");
    })

    it("Verify that balance is displayed in side menu",async()=>{
        expect(await pages('home').sideMenu.balance.getText()).toEqual("$5,240");
    })

    it("Verify that transaction dashboard is opened when this menu option is selected",async()=>{
        await pages('home').sideMenu.item('transactions').click();
        const elem = await pages('transactions').transaction.item('addTransaction');
        await elem.waitForDisplayed();
        expect(await elem.isDisplayed()).toEqual(true);

    })

    it("Verify that About dashboard is opened when this menu option is selected",async()=>{
        await pages('home').sideMenu.item('about').click();
        const elem = await $('.about-heading');
        await elem.waitForDisplayed();
        expect(await elem.isDisplayed()).toEqual(true);

    })

    it("Verify that modal window is opened when Add transaction is clicked on Transaction page",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        await transactionPage.transaction.item('addTransaction').waitAndClick();
        await transactionPage.transaction.item('modal').waitForDisplayed();
        expect( await transactionPage.transaction.item('modal').isDisplayed()).toEqual(true);
    })
})
const{pages}=require('./../po');

describe("Advanced tests for Expense Tracker home page",()=> {

    beforeEach(async function () {
        homePage = await pages('home');
        await homePage.open();
    });

    it("Verify Account-Balance chat is fully loaded ",async()=>{ 
      await browser.waitUntil(
        async () => await homePage.home.item('balance_graph').isDisplayed() === true,
        { timeout: 5000, interval: 600, timeoutMsg: "balance graph is not loaded after 5000 timeout" }
        );
    })

    it("Verify Color of Transaction button in SideMenu on mouse over ",async()=>{
        const elem = await pages('home').sideMenu.item('transactions');
        await elem.moveTo();
        const color = await elem.getCSSProperty('background');
        await expect(color.value).toHaveText("rgba(239, 244, 255, 1)")
    })
    it("Verify Color of About button in SideMenu on mouse over ",async()=>{
        const elem = await pages('home').sideMenu.item('about');
        await elem.moveTo();
        const color = await elem.getCSSProperty('background');
        await expect(color.value).toEqual("none 0% 0% auto repeat padding-box border-box scroll rgba(239, 244, 255, 1)")
    })

    it('Verify that cookie can be set return a cookie for me', async () => {
        await browser.setCookies([
            {name: 'MyCookie', value: '123'},
        ])
        const testCookie = await browser.getCookies(['MyCookie'])
        expect (testCookie[0].value).toEqual('123');
    })

    it('Local storage', async () => {
        const key = "localStorageKey";
        const value = "localStorageValue";
        await browser.execute(function (key, value) {
         window.localStorage.setItem(key, value);
        }, key, value);
        const readValue = await browser.execute(function (key) {
        return window.localStorage.getItem(key);
        }, key);
        expect (readValue).toEqual("localStorageValue");
    })
})
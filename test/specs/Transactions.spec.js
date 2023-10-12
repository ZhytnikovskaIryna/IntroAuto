
const{pages}=require('../po');

describe("Basic tests for Expense Tracker Transaction page",()=> {

    it("Verify that modal window is opened when Add transaction is clicked on Transaction page",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        await transactionPage.transaction.item('addTransaction').waitAndClick();
        await transactionPage.transaction.item('modal').waitForDisplayed();
        expect( await transactionPage.transaction.item('modal').isDisplayed()).toEqual(true);
    })

    it("Verify that new transaction can be added on Transaction page",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        await transactionPage.transaction.item('addTransaction').waitAndClick();
        const modalWindow = await transactionPage.transaction.item('modal').waitForDisplayed();
        
        //expect( await transactionPage.transaction.item('modal').isDisplayed()).toEqual(true);
    })
})
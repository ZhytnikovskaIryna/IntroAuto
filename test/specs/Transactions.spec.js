
const{pages}=require('../po');

describe("Basic tests for Expense Tracker Transaction page",()=> {


    it("Verify that modal window is opened when Add transaction is clicked on Transaction page",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.transaction.item('modal').waitForDisplayed();
        expect( await transactionPage.transaction.item('modal').isDisplayed()).toEqual(true);
    })

    it("Verify that new transaction can be added on Transaction page and +1 is add to the total count of transactions ",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.addTransaction.input('amount').setValue('100');
        await transactionPage.addTransaction.addButton.waitAndClick();
        expect(await transactionPage.transaction.item('itemsCount').getText()).toEqual("("+(parseInt(count.slice(1,-7))+1).toString()+" items)")
    })

    it("Verify that transaction can be deleted at Transaction page total count of transactions is decreased ",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.item('row1');
        await transactionPage.transaction.item('checkbox').click();
        await transactionPage.transaction.DeleteTransactionBtn.click();
        await transactionPage.deleteTransactionDialog.DeleteDialogOkButton.click();
        expect(await transactionPage.transaction.item('itemsCount').getText()).toEqual("("+(parseInt(count.slice(1,-7))-1).toString()+" items)")
    })

    it("Verify that transaction is not deleted if Cancel button is presed in Delete Transaction dialog",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.item('row1');
        await transactionPage.transaction.item('checkbox').click();
        await transactionPage.transaction.DeleteTransactionBtn.click();
        await transactionPage.deleteTransactionDialog.DeleteDialogCancelButton.click();
        expect(await transactionPage.transaction.item('itemsCount').getText()).toEqual(count);
    })

    it("Verify that new transaction can be added with description ",async()=>{
        const transactionPage = await pages('transactions');
        await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.addTransaction.input('amount').setValue('100');
        await transactionPage.addTransaction.input('description').setValue('description random');
        await transactionPage.addTransaction.addButton.waitAndClick();
        const row = await transactionPage.transaction.item('row1');
        expect(row).toHaveText('description random');
    })
})
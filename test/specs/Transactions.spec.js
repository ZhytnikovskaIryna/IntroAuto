const{pages}=require('./../po');

describe("Basic tests for Expense Tracker Transaction page",()=> {

    it("Verify that modal window is opened when Add transaction is clicked on Transaction page",async()=>{
        transactionPage = pages('transactions');
        await transactionPage.open();
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.transaction.item('modal').waitForDisplayed();
        await expect(await transactionPage.transaction.item('modal')).toBeDisplayed();
        await transactionPage.addTransaction.cancelButton.waitAndClick();

    })

    it("Verify that new transaction can be added at Transaction page and +1 is added to the total count of transactions ",async()=>{
       // transactionPage = pages('transactions');
        //await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.addTransaction.input('amount').setValue('100');
        await transactionPage.addTransaction.addButton.waitAndClick();
        await expect(await transactionPage.transaction.item('itemsCount')).toHaveText("("+(parseInt(count.slice(1,-7))+1).toString()+" items)")
    })

    it("Verify that transaction can be deleted at Transaction page total count of transactions is decreased ",async()=>{
        //transactionPage = pages('transactions');
        //await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.item('checkbox').waitAndClick();
        await transactionPage.transaction.DeleteTransactionBtn.waitAndClick();
        await transactionPage.deleteTransactionDialog.DeleteDialogOkButton.waitAndClick();
        await expect(await transactionPage.transaction.item('itemsCount')).toHaveText("("+(parseInt(count.slice(1,-7))-1).toString()+" items)");
    })

    it("Verify that transaction is not deleted if Cancel button is clicked in Delete Transaction dialog",async()=>{
        //transactionPage = pages('transactions');
        //await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.item('checkbox').waitAndClick();
        await transactionPage.transaction.DeleteTransactionBtn.waitAndClick();
        await transactionPage.deleteTransactionDialog.DeleteDialogCancelButton.waitAndClick();
        await expect(await transactionPage.transaction.item('itemsCount')).toHaveText(count);
    })

    it("Verify that new transaction can be added with description ",async()=>{
        //transactionPage = pages('transactions');
        //await transactionPage.open();
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.addTransaction.input('amount').setValue('100');
        await transactionPage.addTransaction.input('description').setValue('description random');
        await transactionPage.addTransaction.addButton.waitAndClick();
        await expect(await transactionPage.transaction.item('description')).toHaveText('description random');
    })

    it("Verify that checkbox is clickable",async()=>{
        //transactionPage = pages('transactions');
       // await transactionPage.open();
        const elem = await transactionPage.transaction.item('checkbox');   
        await expect(elem).toBeClickable();
        
    })
})
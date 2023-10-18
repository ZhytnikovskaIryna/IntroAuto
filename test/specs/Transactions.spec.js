const{pages}=require('./../po');

describe("Basic tests for Expense Tracker Transaction page",()=> {
    beforeEach(async ()=> {
        transactionPage = pages('transactions');
        await transactionPage.open();
     });

    it("Verify that new transaction can be added with description ",async()=>{
        const count = await transactionPage.transaction.item('itemsCount').getText();    
        await transactionPage.transaction.AddNewTransactionBtn.waitAndClick();
        await transactionPage.addTransaction.input('amount').setValue('100');
        await transactionPage.addTransaction.input('description').setValue('description random');
        await transactionPage.addTransaction.addButton.waitAndClick();
        // Here if we put await before expect test starts to fail as it should.Wothout await it passes though description I've put is wrong
        expect(await transactionPage.transaction.item('description')).toHaveText('2description random');
    })

})
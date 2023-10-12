const {SideMenu}=require('./../components')
class BasePage{
    constructor(url){
        this.url=url;
        this.sideMenu = new SideMenu();

        browser.addCommand("waitAndClick", async function () {
            await this.waitForDisplayed();
            await this.click();
        }, true)

    }

    open(){
        return browser.url(this.url);
    }

    
}
module.exports = BasePage;
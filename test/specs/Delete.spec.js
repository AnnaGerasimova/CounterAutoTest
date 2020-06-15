const URL = "https://likejean.github.io/homework-5/";
const DeleteBtn = '//button[@id=\'1\']'

describe("Delete btn", () => {
    before(() => {
        browser.url(URL);
    });

    it("Verify that if default counter is deleted, the user  will see ''ADD COUNTER button'' and two fields : ''Add Name Field'' and \"Default Value Field\", Total: 0, header 'Counters'",  () => {
        // we can check by the entire block at once, so some checks below can be eliminated, I left them just in case
        const Block = $('//div[@class=\'container-fluid counter-wrapper\']');
        expect((Block).isDisplayed()).toBe(true);
        const AddCounterButton = $('//button[@class=\'btn-success btn Ripple-parent add col-6\']');
        const Total = $('//h3[@class=\'total-count\']');
        const h1 = $('//h1');
        const AddNameField = $('//input[@data-testid = "counter-name-input"]')
        const DefaultValueField = $('//input[@data-testid = \'counter-value-input\']')
        $(DeleteBtn).click();
        expect((Block).isDisplayed()).toBe(false);
        expect((AddCounterButton).isDisplayed()).toBe(true);
        expect((Total).isDisplayed()).toBe(true);
        expect((h1).isDisplayed()).toBe(true);


        expect((h1).getText()).toEqual('Counters');
        expect((AddNameField).isDisplayed()).toBe(true);
        const check = AddNameField.getValue();
        expect(check).toBe('Counter Name');
        const value1 = (Total).getText();
        expect(value1).toBe('Total: 0');

        //another way to check, just zero, split by space, get the one you need
        const value1Check2 = (Total).getText().split(' ')[1]
        expect(value1Check2).toBe('0');
        expect((DefaultValueField).isDisplayed()).toBe(true);

        // check text display on the page

        const EnterCounterTitle = $('//label[contains(text(),\'Enter Counter Title:\')]')
        const EnterInitialCount = $('//label[contains(text(),\'Enter Initial Count:\')]')
        const actualEnterCounterTitle = 'Enter Counter Title:'
        const actualEnterInitialCount = 'Enter Initial Count:'
        const expectedText1 = EnterCounterTitle.getText();
        const expectedText2 = EnterInitialCount.getText();
        expect(expectedText1).toEqual(actualEnterCounterTitle);
        expect(expectedText2).toEqual(actualEnterInitialCount);
    });


});
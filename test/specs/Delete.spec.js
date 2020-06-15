const url = "https://likejean.github.io/homework-5/";
const deleteBtn = '//button[@id=\'1\']'
const addNameField = '//input[@data-testid = "counter-name-input"]'
const h1 = '//h1'
const total = '//h3[@class=\'total-count\']'
const defaultValueField = '//input[@data-testid = \'counter-value-input\']'

describe("Delete btn", () => {
    before(() => {
        browser.url(url);
    });

    it("Verify that after delete btn is clicked, the entire default counter block is deleted",  () => {
        const block = $('//div[@class=\'container-fluid counter-wrapper\']');
        expect((block).isDisplayed()).toBe(true);
        $(deleteBtn).click();
        expect((block).isDisplayed()).toBe(false);

    });

    it("Verify that after delete btn is clicked, the entire Add New Counter block is present on the page",  () => {
        const addNewCounterblock = $('//div[@id=\'root\']/div/div/div[@class=\'container\']');
        expect((addNewCounterblock).isDisplayed()).toBe(true);

    });


    it("Verify that if default counter is deleted, a user  will see: ADD COUNTER button, Add Name Field, Default Value Field, Total: 0, header 'Counters'",  () => {
        const addCounterButton = $('//button[@class=\'btn-success btn Ripple-parent add col-6\']');
        expect((addCounterButton).isDisplayed()).toBe(true);
        expect($(addNameField).isDisplayed()).toBe(true);
        expect($(defaultValueField).isDisplayed()).toBe(true);
        expect($(total).isDisplayed()).toBe(true);
        expect($(h1).isDisplayed()).toBe(true);
    });


    it("Verify what text is present on the page",  () => {
        expect($(h1).getText()).toEqual('Counters');
        const check = $(addNameField).getValue();
        expect(check).toBe('Counter Name');
        const value1 = $(total).getText();
        expect(value1).toBe('Total: 0');

    });

    it("Verify that Total field value = 0",  () => {
        const value1Check2 = $(total).getText().split(' ')[1]
        expect(value1Check2).toBe('0');

    });

    it("check text display on the page",  () => {
        const enterCounterTitle = $('//label[contains(text(),\'Enter Counter Title:\')]')
        const enterInitialCount = $('//label[contains(text(),\'Enter Initial Count:\')]')
        const actualEnterCounterTitle = 'Enter Counter Title:'
        const actualEnterInitialCount = 'Enter Initial Count:'
        const expectedText1 = enterCounterTitle.getText();
        const expectedText2 = enterInitialCount.getText();
        expect(expectedText1).toEqual(actualEnterCounterTitle);
        expect(expectedText2).toEqual(actualEnterInitialCount);

    });

});
const homeUrl = 'https://likejean.github.io/homework-5/';
const EditNameField = '//input[@id= "1"]';
const addNameField = '//input[@data-testid="counter-name-input"]';
const defaultValueField = '//input[@data-testid="counter-value-input"]';
const addCounterBtn = '//button[@class = "btn-success btn Ripple-parent add col-6"]';

describe('Test Default State of Counter', () => {

    before(function () {
        browser.url(homeUrl);
    })

    it('should 3 sub buttons be present and have -1, -2, -3 values by default', () => {
        const expSubBtn1Text = '-1';
        const actualSubBtn1Text = $('//button[@step="-1"]');
        const expSubBtn2Text = '-2';
        const actualSubBtn2Text = $('//button[@step="-2"]');
        const expSubBtn3Text = '-3';
        const actualSubBtn3Text = $('//button[@step="-3"]');
        expect(actualSubBtn1Text).toHaveText(expSubBtn1Text);
        expect(actualSubBtn2Text).toHaveText(expSubBtn2Text);
        expect(actualSubBtn3Text).toHaveText(expSubBtn3Text);
    })

    it('should 3 add buttons be present and have 1, 2, 3 values by default', () => {
        const expAddBtn1Text = '1';
        const actualAddBtn1Text = $('//button[@step="1"]');
        const expAddBtn2Text = '2';
        const actualAddBtn2Text = $('//button[@step="2"]');
        const expAddBtn3Text = '3';
        const actualAddBtn3Text = $('//button[@step="3"]');
        expect(actualAddBtn1Text).toHaveText(expAddBtn1Text);
        expect(actualAddBtn2Text).toHaveText(expAddBtn2Text);
        expect(actualAddBtn3Text).toHaveText(expAddBtn3Text);
    })

    it('should DELETE button have text DELETE', () => {
        const actualDeleteBtn = $('//button[@id="1"]');
        expect(actualDeleteBtn).toHaveText('DELETE');
    })

    it('should Edit name field be present', () => {
        expect($(EditNameField)).toBeDisplayed();
    })

    it('should Edit name field contain "Default Counter" text', () => {
        expect($(EditNameField)).toHaveValue('Default Counter');
    })

    it('should "Edit Counter Title:" text be present', () => {
        const EditCounterTitle = $('//div[@class="container-fluid counter-wrapper"]//label');
        expect(EditCounterTitle).toHaveText("Edit Counter Title:");
    })

    it('should RESET button have text "RESET"', () => {
        const resetButton = $('//button[@class="btn-primary btn Ripple-parent reset"]');
        expect(resetButton).toHaveText("RESET");
    })

    it('should "Enter Counter Title:" text be present', () => {
        const enterCounterTitle = $('//label[contains(text(),"Enter Counter Title")]');
        expect(enterCounterTitle).toHaveText("Enter Counter Title:");
    })

    it('should Add Name Field be present', () => {
        expect($(addNameField)).toBeDisplayed();
    })

    it('should Add Name Field contain "Counter Name" text', () => {
        expect($(addNameField)).toHaveValue("Counter Name");
    })

    it('should "Enter Initial Count:" text be present', () => {
        const enterInitialCount = $('//label[contains(text(),"Enter Initial Count")]');
        expect(enterInitialCount).toHaveText("Enter Initial Count:");
    })

    it('should Default Value Field be present', () => {
        expect($(defaultValueField)).toBeDisplayed();
    })

    it('should Default Value Field contain "50" by default', () => {
        expect($(defaultValueField)).toHaveValue("50");
    })

    it('should Add Counter Button be present', () => {
        expect($(addCounterBtn)).toBeDisplayed();
    })

    it('should Add Counter Button button have text "ADD COUNTER"', () => {
        const addCounterBtnTxt = 'ADD COUNTER';
        expect($(addCounterBtn)).toHaveText(addCounterBtnTxt);
    })

})
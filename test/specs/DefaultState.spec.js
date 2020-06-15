const homeUrl = 'https://likejean.github.io/homework-5/';

describe('Test Default State of Counter',() => {

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
        const expDeleteBtn = 'DELETE';
        const actualDeleteBtn = $('//button[@id="1"]');
        expect(actualDeleteBtn).toHaveText(expDeleteBtn);
    })

    it('should Edit name field be present', () => {
        const EditNameField = $('//input[@id= "1"]');
        expect(EditNameField).toBeDisplayed;
    })

    it('should Edit name field contain "Default Counter" text', () => {
         const EditNameFieldTxt = 'Default Counter';
         const EditNameField = $('//input[@value="Default Counter"]');
         expect(EditNameField).toHaveAttr('value', EditNameFieldTxt)
     })

    it('should "Edit Counter Title:" text be present', () => {
        const EditCounterTitleText = "Edit Counter Title:";
        const EditCounterTitle = $('//div[@class="container-fluid counter-wrapper"]//label');
        expect(EditCounterTitle).toHaveText(EditCounterTitleText);
    })

    it('should RESET button be present', () => {
        const resetButton = $('//button[@class="btn-primary btn Ripple-parent reset"]');
        expect(resetButton).toBeDisplayed;
    })

    it('should "Enter Counter Title:" text be present', () => {
        const enterCounterTitleText = "Enter Counter Title:";
        const enterCounterTitle = $('//label[contains(text(),"Enter Counter Title")]');
        expect(enterCounterTitle).toHaveText(enterCounterTitleText);
     })

    it('should Add Name Field be present', () => {
        const addNameField = $('//input[@data-testid="counter-name-input"]');
        expect(addNameField).toBeDisplayed;
     })

    it('should Add Name Field contain "Counter Name" text', () => {
        const addNameFieldTxt = 'Counter Name';
        const addNameField = $('//input[@data-testid="counter-name-input"]');
        expect(addNameField).toHaveAttr('value','Counter Name')
     })

    it('should "Enter Initial Count:" text be present', () => {
        const enterInitialCountText = "Enter Initial Count:";
        const enterInitialCount = $('//label[contains(text(),"Enter Initial Count")]');
        expect(enterInitialCount).toHaveText(enterInitialCountText);
    })

    it('should Default Value Field be present', () => {
        const defaultValueField = $('//input[@data-testid="counter-value-input"]');
        expect(defaultValueField).toBeDisplayed;
    })

    it('should Default Value Field contain "50" by default', () => {
        const defaultValueFieldValue = "50";
        const defaultValueField = $('//input[@data-testid="counter-value-input"]');
        expect(defaultValueField).toHaveAttr('value',"50")
    })

    it('should Add Counter Button be present', () => {
        const addCounterBtn = $('//button[@class = "btn-success btn Ripple-parent add col-6"]');
        expect(addCounterBtn).toBeDisplayed;
    })

    it('should Add Counter Button button have text "ADD COUNTER"', () => {
        const addCounterBtnText = 'ADD COUNTER';
        const addCounterBtn = $('//button[@class = "btn-success btn Ripple-parent add col-6"]');
        expect(addCounterBtn).toHaveText(addCounterBtnText);
    })

})


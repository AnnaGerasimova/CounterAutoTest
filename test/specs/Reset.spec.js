const URL = "https://likejean.github.io/homework-5/";
const resetBtn = '//button[@class=\'btn-primary btn Ripple-parent reset\']'

describe("RESET BTN", () => {
    before(() => {
        browser.url(URL);
    });

    it("Verify that reset btn click would reset a Total value to zero with only default counter on the page", () => {
        const btnMinus3 = $('//button[@step= "-3"]');
        btnMinus3.click();
        const total = $('//h3[@class=\'total-count\']\n');
        const check = total.getText().split(' ')[1];
        const actual = '-3';
        expect(check).toEqual(actual);
        $(resetBtn).click();
        const check2 = $(total).getText();
        const actual2 = 'Total: 0';
        expect(check2).toBe(actual2);
    });

    it("Verify that reset btn click would reset a count value to zero", () => {
        const btnMinus2 = $('//button[@step= "-2"]');
        const btnAdd1 = $('//button[@step= "1"]');
        btnMinus2.click();
        btnAdd1.click();
        const countValue = $('//span[@class=\'badge primary badge-primary\']');
        const check = countValue.getText();
        expect(check).toEqual('-1');
        $(resetBtn).click();
        const check2 = countValue.getText();
        expect(check2).toEqual('0');
    });

});





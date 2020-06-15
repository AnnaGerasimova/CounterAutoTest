const URL = "https://likejean.github.io/homework-5/";
const ResetBtn = '//button[@class=\'btn-primary btn Ripple-parent reset\']'
describe("Reset btn", () => {
    before(() => {
        browser.url(URL);
    });

    it("Verify that reset btn click would reset a Total value to zero with only default counter on the page",  () => {
      const BtnMinus3 = $('//button[@step= "-3"]');
      BtnMinus3.click();
      const Total = $('//h3[@class=\'total-count\']\n');
      const check = Total.getText().split(' ')[1];
      const actual = '-3'
      expect(check).toEqual(actual);
      $(ResetBtn).click();
      const check2 = $('//h3[@class=\'total-count\']\n').getText()
      const actual2 = 'Total: 0';
      expect(check2).toBe(actual2);
      browser.refresh();

    });

    it("Verify that reset btn click would reset a count value to zero",  () => {
        const BtnMinus2 = $('//button[@step= "-2"]');
        const BtnAdd1 = $('//button[@step= "1"]')
        BtnMinus2.click()
        BtnAdd1.click()
        browser.pause(1000)
        const CountValue = $('//span[@class=\'badge primary badge-primary\']')
        const check = CountValue.getText();
        expect(check).toEqual('-1');
        $(ResetBtn).click();
        browser.pause(1000);
        const check2 = CountValue.getText();
        expect(check2).toEqual('0');
    });

});





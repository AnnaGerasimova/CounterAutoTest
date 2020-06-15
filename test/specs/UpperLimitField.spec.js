let homeUrl = 'https://likejean.github.io/homework-5/';
let defaultUpperLimitField = '//button[@name="positive"]';
let defaultLowerLimitField = '//button[@name="negative"]';
let upperLimitField = '//input[@name="upper"]';
let lowerLimitField = '//input[@name="lower"]';
let errorMsg = '//div[@class="alert alert-danger row align-items-center justify-content-center"]';
let subAndAddBtn = '//button[@class="btn-black btn Ripple-parent"]';


describe('Upper Limit field (ULF) ', () => {

  beforeEach('open counter app', () => {
    browser.url(homeUrl);
    $(defaultUpperLimitField).click();
  });

      it('Verify that after ULF is active, default 3 can be changed to 4', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('4');
        expect($(upperLimitField)).toHaveValue('4');
      });

      it('Verify that ULF does not accept letters (input: "a")', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('a');
        expect($(upperLimitField)).toHaveValue('');
      });

      it('Verify that errorMsg pop up when ULF is empty', () => {
        $(upperLimitField).click();
        browser.keys('Backspace');
        expect($(errorMsg)).toHaveText('ERROR: Input must be an INTEGER');
      });

      it('Verify that ULF does not accept special characters(input: @#$)', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('@#$');
        expect($(upperLimitField)).toHaveValue('');
      });

      it('Verify that ULF does not accept fractional part of the number(input 2.3)', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('2.3');
        expect($(upperLimitField)).toHaveValue('2');
      });

      // Bug report - CCA-136
      it('Verify that ULF does not accept 10', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('10');
        expect($(upperLimitField)).toHaveValue('');
      });
      // Bug report - CCA-218
      it('Verify that add and sub buttons are not generated if ULF input value >=10', () => {
        $(upperLimitField).clearValue();
        $(upperLimitField).setValue('10');
        let count = $$(subAndAddBtn);
        expect(count).toBeElementsArrayOfSize({ lte: 18 });
                      // ULF should accept only max value = 9, so add and sub btns should be  no more than 18
      });

    it('Verify that errorMsg pop up when ULF = 10', () => {
       $(upperLimitField).click();
       $(upperLimitField).setValue('10');
       expect($(errorMsg)).toHaveText('ERROR: Must be less than 10');
    });

    it('Verify that ULF does not accept negative numbers (input to ULF - 4)', () => {
       $(upperLimitField).click();
       $(upperLimitField).setValue('-4');
       expect($(errorMsg)).toHaveText('ERROR: Upper Limit Must be GREATER than Lower Limit');
    });

    it('Verify that errorMsg pop up when ULF = 0', () => {
        $(upperLimitField).click();
        $(upperLimitField).setValue('0');
        expect($(errorMsg)).toHaveText('ERROR: Upper Limit Must be GREATER than Lower Limit');
    });

    it('Verify that errorMsg pop up when LLF = 6 and ULF = 3 by default', () => {
        $(defaultLowerLimitField).click();
        $(lowerLimitField).click();
        $(lowerLimitField).setValue('6');
        expect($(errorMsg)).toHaveText('ERROR: Lower Limit Must be Less than Upper Limit');
    });
  })

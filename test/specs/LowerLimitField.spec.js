const homeUrl = 'https://likejean.github.io/homework-5/';
const lowerLimitField = '//button[@name="negative"]';
const lowerLimitFieldActive = '//input[@name="lower"]';
const upperLimitField = '//button[@name="positive"]';
const upperLimitFieldActive = '//input[@name="upper"]';
const errorGreaterThanZero = '//div[contains(@class,\'alert-danger\')]/span';

describe('Lower Limit Field', () => {
    before(function () {
        browser.url(homeUrl);
    });

    it("Should pop up 'ERROR: Input must be an Integer' when an input to LLF =  3+ ", () => {
        const errorMustBeInt = $('//div[@class=\'alert alert-danger row align-items-center justify-content-center\']//span[1]');
        $(lowerLimitField).click();
        $(lowerLimitFieldActive).setValue('3+');
        expect(errorMustBeInt).toHaveText('ERROR: Input must be an INTEGER');
    });

    it("LLF should not accept floating numbers (input 2.3) ", () => {
        $(lowerLimitFieldActive).clearValue();
        $(lowerLimitFieldActive).setValue('2.3');
        expect($(lowerLimitFieldActive)).toHaveValue('2')
    });

    it("Should pop up an error'ERROR: Must be less than 10' when LLF = 10, ULF = 10'", () => {
        const errorLessThanTen = $('//div[contains(@class,\'alert-danger\')]/span\n');
        $(upperLimitField).click();
        $(upperLimitFieldActive).setValue('10');
        $(lowerLimitFieldActive).setValue('10');
        expect(errorLessThanTen).toHaveText('ERROR: Must be less than 10');
    });

    it("Should pop up an error 'ERROR: Must be greater than zero' when LLF = -4 ", () => {
        $(lowerLimitFieldActive).setValue('-4');
        $(upperLimitFieldActive).setValue('9');
        expect($(errorGreaterThanZero)).toHaveText('ERROR: Must be greater than zero');
    });

    it("Should pop up an error 'ERROR: must be greater than zero' when LLF = 0", () => {
        $(lowerLimitFieldActive).setValue('0');
        $(upperLimitFieldActive).setValue('9');
        expect($(errorGreaterThanZero)).toHaveText('ERROR: Must be greater than zero');
    });

})
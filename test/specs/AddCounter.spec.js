const homeUrl = 'https://likejean.github.io/homework-5/';
const addBtnCounter = '//input[@name="name"]';
const errorMessage = '//div[@role= "alert"]';

describe('ADD BUTTONS COUNTER', () => {
    before('open a page', () => {
        browser.url(homeUrl)
    });

    it("should accept integer", () => {
        $(addBtnCounter).setValue('2000001');
        expect($(errorMessage).isDisplayed()).false;
    });

    it("should Error Message is displayed if value length is less then 7 characters", () => {
        $(addBtnCounter).setValue('Gj#js$');
        expect($(errorMessage).isDisplayed()).true;
    });

    it("should accept value with length >=7 characters", () => {
        $(addBtnCounter).setValue('Gj#js$h');
        expect($(errorMessage).isDisplayed()).false;
    });

    it("should accept alphabet letters in Upper Case >= 7 characters", () => {
        $(addBtnCounter).setValue('ABCDEFJ');
        expect($(errorMessage).isDisplayed()).false;
    });

    it("should accept alphabet letters in Lower Case >= 7 characters", () => {
        $(addBtnCounter).setValue('alicemo');
        expect($(errorMessage).isDisplayed()).false;
    });

    it("should accept special >= 7 characters", () => {
        $(addBtnCounter).setValue('@!@#$%&');
        expect($(errorMessage).isDisplayed()).false;
    });

    it("should accept floating numbers >= 7 characters", () => {
        $(addBtnCounter).setValue('3456.145');
        expect($(errorMessage).isDisplayed()).false;
    });
});


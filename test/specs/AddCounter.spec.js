const homeUrl = "https://likejean.github.io/homework-5/";
const error = '//div[@role= "alert"]'
const addBtnCounter = '//input[@name="name"]'

describe('ADD BUTTONS COUNTER', () => {
    before('open a page', () => {
        browser.url(homeUrl)
    });

    it("should accept integer", () => {
        $(addBtnCounter).setValue('2000001');
        expect($(error).isDisplayed()).false;
    });

    it("should Error Message is displayed if value length is less then 7 characters", () => {
        $(addBtnCounter).setValue('Gj#js$');
        expect($(error).isDisplayed()).true;
    });

    it("should accept value with length >=7 characters", () => {
        $(addBtnCounter).setValue('Gj#js$h');
        expect($(error).isDisplayed()).false;
    });

    it("should accept alphabet letters in Upper Case >= 7 characters", () => {
        $(addBtnCounter).setValue('ABCDEFJ');
        expect($(error).isDisplayed()).false;
    });

    it("should accept alphabet letters in Lower Case >= 7 characters", () => {
        $(addBtnCounter).setValue('alicemo');
        expect($(error).isDisplayed()).false;
    });

    it("should accept special >= 7 characters", () => {
        $(addBtnCounter).setValue('@!@#$%&');
        expect($(error).isDisplayed()).false;
    });

    it("should accept floating numbers >= 7 characters", () => {
        $(addBtnCounter).setValue('3456.145');
        expect($(error).isDisplayed()).false;
    });
});





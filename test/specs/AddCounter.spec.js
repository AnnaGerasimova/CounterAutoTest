const homeUrl = "https://likejean.github.io/homework-5/";
const defaultValueField = '//input[@data-testid= "counter-value-input"]'
const error = '//div[@role= "alert"]'

describe("Add counter", () => {

    before('open', () => {
        browser.url(homeUrl);

    });

    it("verify that Default Value Field accepts 1", () => {
        $(defaultValueField).setValue('1');
        expect($(error).isDisplayed()).toEqual(false);
        $(defaultValueField).clearValue();
    });

    it("verify that Default Value Field accepts 1000000", () => {
        $(defaultValueField).setValue('1000000');
        expect($(error).isDisplayed()).toEqual(false);
        $(defaultValueField).clearValue();

    });

// test failed since the app started to accept floating numbers, no error that was recorded earlier

    it("verify that Verify that Default Value Field doesn't accept floating numbers", () => {
        $(defaultValueField).moveTo();
        $(defaultValueField).setValue('1.3');
        expect($(error).isDisplayed()).toEqual(true);

    });

    //test if we expect an error, falling since no error

    it("verify that Default Value Field doesn't accept special characters and error msg is displayed", () => {
        $(defaultValueField).moveTo();
        $(defaultValueField).setValue('@');
        expect($(error).isDisplayed()).toEqual(true);
        $(defaultValueField).clearValue();
    });

    //test if we expect a field to stay empty

    it("verify that Default Value Field doesn't accept special characters and field stays empty", () => {
        $(defaultValueField).moveTo();
        $(defaultValueField).setValue('qa');
        const textInsideInputBox = $(defaultValueField).getValue();
        expect(textInsideInputBox).toEqual('');

    });

// it's bug, thus, it fails

    it("verify that when initial value '50' is deleted in the Default Value field, it stays empty", () => {
        $(defaultValueField).setValue('67');
        const inputValue = $(defaultValueField).getValue();
        for (let i = 0; i < inputValue.length; i++) {
            browser.keys('Back space');
        }
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("verify that Default Value Field accepts -10", () => {
        $(defaultValueField).setValue('-10');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should accept integer", () => {
        $(addBtnCounter).setValue('2000001');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should Error Message is displayed if value length is less then 7 ", () => {
        $(addBtnCounter).setValue('Gj#js$');
        expect($(error).isDisplayed()).toEqual(true);
    });

    it("should accept value with length is less then 7", () => {
        $(addBtnCounter).setValue('Gj#js$h');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should accept alphabet letters in Upper Case length is less then 7", () => {
        $(addBtnCounter).setValue('ABCDEFJ');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should accept alphabet letters in Lower Case length is less then 7", () => {
        $(addBtnCounter).setValue('alicemo');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should accept special length is less then 7", () => {
        $(addBtnCounter).setValue('@!@#$%&');
        expect($(error).isDisplayed()).toEqual(false);
    });

    it("should accept floating numbers length is less then 7", () => {
        $(addBtnCounter).setValue('3456.145');
        expect($(error).isDisplayed()).toEqual(false);
    });
});





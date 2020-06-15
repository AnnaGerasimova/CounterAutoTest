const homeUrl = 'https://likejean.github.io/homework-5/';
const changeStepOptionBtnLeft = '//button[@name="negative"]';
const changeStepOptionBtnRight = '//button[@name="positive"]';
const lowerLimitField = '//input[@name="lower"]';
const upperLimitField = '//input[@name="upper"]';

describe('Test Lower Limit Field(LLF)', () => {

    before(function () {
        browser.url(homeUrl);
    });

    it('should have value 1 in LLF when LLF is active', () => {
        $(changeStepOptionBtnLeft).click();
        expect($(lowerLimitField)).toHaveValue('1');
    });

    it("should have Delete X button on the right side with active LLF", () => {
        expect($(changeStepOptionBtnLeft)).toBePresent();
    });

    it("should appear placeholder 'Change Step Options?' after click on Delete X button", () => {
        $(changeStepOptionBtnLeft).click();
        expect($(changeStepOptionBtnLeft)).toHaveText('CHANGE STEP OPTIONS?')
    });

    it("should change the default value from 1 to 2", () => {
        $(changeStepOptionBtnLeft).click();
        $(lowerLimitField).clearValue();
        $(lowerLimitField).addValue('2');
        expect($(lowerLimitField)).toHaveValue('2')
    });

    it("LLF should accept 9 if ULF is 9", () => {
        $(changeStepOptionBtnRight).click();
        $(upperLimitField).setValue('9')
        $(lowerLimitField).clearValue();
        $(lowerLimitField).addValue('9');
        expect($(lowerLimitField)).toHaveValue('9')
    });

    it("should have error msg 'ERROR: Input must be an Integer' with empty input LLF", () => {
        browser.keys('Back space')
        const errorMsgWithNoInput = $("//div[contains(@class, 'alert-danger')]/span");
        expect(errorMsgWithNoInput).toHaveText("ERROR: Input must be an INTEGER")
    });

    it("should have empty LLF with letters input ('a')", () => {
        $(lowerLimitField).keys('a');
        expect($(lowerLimitField)).toHaveValue('');
    });
});


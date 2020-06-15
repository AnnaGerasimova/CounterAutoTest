const homeUrl = 'https://likejean.github.io/homework-5/';
const upperLimitField = '//button[@name="positive"]';
const upperLimitFieldActive = '//input[@name="upper"]';
const deleteUlF = '//button[@class="btn-danger btn-outline-danger btn Ripple-parent close-button"]';


describe('Upper Limit Field', () => {
    before(function () {
        browser.url(homeUrl);
    });

    it("ULF should have default value = 3, after ULF is active (clicked on placeholder)", () => {
        $(upperLimitField).click();
        expect($(upperLimitFieldActive)).toHaveValue('3')
    });

    it("should Delete X button should appears when ULF is active (on ULF left side)", () => {
        expect($(deleteUlF).isDisplayed());
    });

    it("Delete X button should disappear, after Delete X button is clicked ", () => {
        $(deleteUlF).click();
        expect($(deleteUlF).isDisplayed()).toBe(false);
    });

    it("should appears placeholder = 'Change Step Options?', after Delete X button is clicked, ", () => {
        expect($(upperLimitField)).toHaveText('CHANGE STEP OPTIONS?')
    });

    it("ULF field should be cleared, after Delete X button is clicked.", () => {
        $(upperLimitField).click();
        expect($(upperLimitField)).toHaveValue('');
    });

})
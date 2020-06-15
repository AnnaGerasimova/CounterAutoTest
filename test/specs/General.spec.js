const homeUrl = "https://likejean.github.io/homework-5/"
describe('General tests', () => {
    before('open counter app', () => {
        browser.url(homeUrl);
    });

    it('should verify that header is present', () => {
        const headerField = $('.header');
        expect(headerField).toExist();
    });

    it('should verify that headers title Counters is displayed', () => {
        const actualHeadersTitle = $('.header').getText();
        const expectedHeadersTitle = "Counters";
        expect(actualHeadersTitle).toBe(expectedHeadersTitle);
    });

    it('should verify that Total result value field is present', () => {
        const totalResultValueFild = $('.total-count');
        expect(totalResultValueFild).toBeDisplayed();
    })

    it('should verify that Total result value field by default says "Total: 0"', () => {
        const actualTotalResultField = $('.total-count');
        expect(actualTotalResultField).toHaveText("Total: 0");
    })

    it('should verify that Count value is present', () => {
        const countValue = $('.badge.badge-primary.primary');
        expect(countValue).toBeDisplayed();
    })
    it('should verify that "Count value" by default 0', () => {
        const countValue = $('.badge.badge-primary.primary');
        expect(countValue).toHaveText('0');
    })

    it('should verify that Lower limit field (LLF) is present', () => {
        const lowerLimitField = $('button[name=negative]');
        expect(lowerLimitField).toBeDisplayed();
    })

    it('should verify that Upper limit field (ULF) is present', () => {
        const upperLimitField = $('button[name=positive]');
        expect(upperLimitField).toBeDisplayed();
    })

    it('should verify that LLF says "CHANGE STEP OPTIONS??"', () => {
        const actualLLF = $('button[name=negative]').getText();
        const expectedLLF = "CHANGE STEP OPTIONS?";
        expect(actualLLF).toBe(expectedLLF);
    })

    it('should verify that ULF says "CHANGE STEP OPTIONS?"', () => {
        const actualULF = $('button[name=positive]').getText();
        const expectedULF = "CHANGE STEP OPTIONS?";
        expect(actualULF).toBe(expectedULF);
    })

    it('should verify that Counter Name is present', () => {
        const counterName = $('.container-fluid.counter-wrapper  h3');
        expect(counterName).toBeDisplayed();
    })

    it('should verify that initial Counter Name is "Default Counter"', () => {
        const actualInitialCounterName = $('.container-fluid.counter-wrapper  h3').getText();
        const expectedInitialCounterName = "1. Default Counter";
        expect(actualInitialCounterName).toBe(expectedInitialCounterName);
    });
});




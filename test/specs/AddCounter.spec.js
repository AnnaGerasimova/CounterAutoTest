const homeUrl = "https://likejean.github.io/homework-5/";
// const DefaultValueField = '//input[@data-testid= "counter-value-input"]'
// not working when I put this const at the top with $() or without

describe("Add counter", () => {
    before(() => {
        browser.url(homeUrl);
    });

it("verify that Default Value Field accepts 1",  () => {
     const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
     DefaultValueField.setValue('1');
     const Error = $('//div[@role= "alert"]')
     expect((Error).isDisplayed()).toBe(false);
     DefaultValueField.clearValue();
});

    it("verify that Default Value Field accepts 1000000",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        DefaultValueField.setValue('1000000');
        const Error = $('//div[@role= "alert"]');
        expect((Error).isDisplayed()).toBe(false);
        DefaultValueField.clearValue();
        browser.refresh();

    });

// // test is failed since the app started to accept floating numbers, no error that was recorded earlier

    it("verify that Verify that Default Value Field doesn't accept floating numbers",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        DefaultValueField.clearValue();
        DefaultValueField.moveTo()
        DefaultValueField.setValue('1.3');
        const Error = $('//div[@role= "alert"]')
        expect((Error).isDisplayed()).toBe(true);
    });

    //test if we expect an error, falling since no error
    it("verify that Default Value Field doesn't accept special characters and error msg is displayed",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        DefaultValueField.clearValue()
        $(DefaultValueField).moveTo()
        DefaultValueField.setValue('@');
        const Error = $('//div[@role= "alert"]')
        expect((Error).isDisplayed()).toBe(true);
        DefaultValueField.clearValue()
    });

//     //test if we expect a field to stay empty

    it("verify that Default Value Field doesn't accept special characters and field stays empty",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        $(DefaultValueField).moveTo()
         DefaultValueField.setValue('qa');
        const textInsideInputBox = DefaultValueField.getValue();
        expect(textInsideInputBox).toEqual('');
        console.log('--------------------------')
        console.log("Input field is empty");

    });

// // it's bug, thus, it fails

    it("verify that when initial value '50' is deleted in the Default Value field, it stays empty",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        DefaultValueField.setValue('67');
        const inputValue = DefaultValueField.getValue();
        for(let i = 0; i < inputValue.length; i++) {
            browser.keys('Back space');
            browser.pause(2000)
        }
        const Error = $('//div[@role= "alert"]')
        expect((Error).isDisplayed()).toBe(false);

    });

    it("verify that Default Value Field accepts -10",  () => {
        const DefaultValueField = $('//input[@data-testid= "counter-value-input"]')
        DefaultValueField.setValue('-10');
        const Error = $('//div[@role= "alert"]')
        expect((Error).isDisplayed()).toBe(false);
    });


});



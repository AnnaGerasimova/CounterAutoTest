const addBtn = '.btn-black';
const totalResult = '.total-count';
const changeStepOptionsLLF = '[name="negative"]';
const changeStepOptionsULF = '[name="positive"]';
const LLF = '[name="lower"]';
const ULF = '[name="upper"]';

let LLFvalue = 1;
let ULFvalue = 9;
let addBtnsArray = [];


describe('ADD BUTTONS', () => {
    before('open a page', () => {
        browser.url('https://likejean.github.io/homework-5/')
    });

    it('Verify that default add buttons values = 1, 2, 3 ' +
        '(3 buttons total) buttons are in ascending order', () => {
        const addBtnLength = $$(addBtn).length;
        let actualBtnOrder = '';
        for (let i = 3; i < addBtnLength; i++) {
            const actualValue = $$(addBtn)[i].getText();
            actualBtnOrder += actualValue;
            expect(+actualValue).toBe(i - 2);
        }
// verify buttons are in ascending order
        const expectedBtnOrder = actualBtnOrder.split('')
            .sort((a, b) => a - b).join('');
        expect(actualBtnOrder).toBe(expectedBtnOrder);
    });

    it('Verify that sub buttons behavior = operation addition correct. Count value = 0,' +
        'add button 3 is pressed, count value = 0 + 3 = 3', () => {
        const length = $$(addBtn).length;
        $$(addBtn)[length - 1].click();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(totalResultInt).toBe('3');
    });

    it('Verify that add  buttons changed immediately after the values in LLF/ULF changed', () => {
        $(changeStepOptionsLLF).click();
        $(LLF).setValue(LLFvalue);
        $(changeStepOptionsULF).click();
        $(ULF).setValue(ULFvalue);

// add to addBtnsArray only addBtn with positive values from all black Btns
        for (let i = 0; i < $$(addBtn).length; i++) {
            let temp = $$(addBtn)[i].getText();
            if (temp[0] !== '-') addBtnsArray.push(temp);
        }
// verify addBtns values is correct
        for (let i = 0; i < addBtnsArray.length; i++) {
            expect(+addBtnsArray[i]).toBe(LLFvalue + i);
        }
    });

    it('verify quantity of add Btn is correct', () => {
        expect(addBtnsArray.length).toBe(ULFvalue - LLFvalue + 1)
    });

    it('verify after change ULF and LLF quantity of add Btn is correct', () => {
        LLFvalue = 1;
        ULFvalue = 4;
        addBtnsArray = [];
        $(LLF).setValue(LLFvalue);
        $(ULF).setValue(ULFvalue);

        for (let i = 0; i < $$(addBtn).length; i++) {
            let temp = $$(addBtn)[i].getText();
            if (temp[0] !== '-') addBtnsArray.push(temp);
        }
        expect(addBtnsArray.length).toBe(ULFvalue - LLFvalue + 1)
    });


});
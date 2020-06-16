const subBtn = '.btn-black';
const totalResult = '.total-count';
const changeStepOptionsLLF = '[name="negative"]';
const changeStepOptionsULF = '[name="positive"]';
const LLF = '[name="lower"]';
const ULF = '[name="upper"]';

//LLFvalue and  ULFvalue might be random integers
let LLFvalue = 1;
let ULFvalue = 8;
let subBtnsArray = [];

describe('SUB BUTTONS', () => {
    before('open a page', () => {
        browser.url('https://likejean.github.io/homework-5/');
    });

    it('Verify that default sub buttons values = -1, -2, -3 ' +
        '(3 buttons total) buttons are in ascending order', () => {
        const subBtnLength = $$(subBtn).length;
        let actualBtnOrder = '';
        for (let i = -subBtnLength; i > 3; i--) {
            const actualValue = $$(subBtn)[i].getText();
            actualBtnOrder += actualValue;
            expect(+actualValue).toBe(i + 3);
        }
// verify buttons are in ascending order
        const expectedBtnOrder = actualBtnOrder.split('')
            .sort((a, b) => a - b).join('');
        expect(actualBtnOrder).toBe(expectedBtnOrder);
    });

    it('Verify that sub buttons behavior = operation substruction correct. Count value = 0,' +
        'sub button -3 is pressed, count value = 0 + (-3) = -3', () => {
        const length = $$(subBtn).length;
        $$(subBtn)[(length / 2) - 1].click();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(totalResultInt).toBe('-3');
    });

    it('Verify that sub buttons changed immediately after the values in LLF/ULF changed', () => {
        $(changeStepOptionsLLF).click();
        $(LLF).setValue(LLFvalue);
        $(changeStepOptionsULF).click();
        $(ULF).setValue(ULFvalue);

// sub to subBtnsArray only subBtn with negative values from all black Btns
        for (let i = 0; i < $$(subBtn).length / 2; i++) {
            let temp = $$(subBtn)[i].getText();
            if (temp[0] === '-') subBtnsArray.push(temp);
        }
// verify subBtns values is correct
        for (let i = 0; i < subBtnsArray.length; i++) {
            expect(+subBtnsArray[i]).toBe((LLFvalue + i) * (-1));
        }
    });

    it('verify quantity of sub Btn is correct', () => {
        expect(subBtnsArray.length).toBe(ULFvalue - LLFvalue + 1)
    });

    it('verify after change ULF and LLF quantity of sub Btn is correct', () => {
        LLFvalue = 2;
        ULFvalue = 5;
        subBtnsArray = [];
        $(LLF).setValue(LLFvalue);
        $(ULF).setValue(ULFvalue);

        for (let i = 0; i < $$(subBtn).length; i++) {
            let temp = $$(subBtn)[i].getText();
            if (temp[0] !== '-') subBtnsArray.push(temp);
        }
        expect(subBtnsArray.length).toBe(ULFvalue - LLFvalue + 1);
    });
});
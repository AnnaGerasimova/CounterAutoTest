// Page Elements
const countValue = '[data-test="badge"]';
const totalResult = '.total-count';
const defaultValueField = '[name="value"]';
const addCounterBtn = '.btn-success';
const resetBtn = '.reset';
const deleteBtn = '.delete';
const counter = '//div[@class="container-fluid counter-wrapper"]';

describe('TOTAL', () => {
    before('open page', () => {
        browser.url('https://likejean.github.io/homework-5/');
    });

    it('Verify Total result field value equal the Count value => 0 (by default)', () => {
        const countValueInt = $(countValue).getText();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(countValueInt).toBe(totalResultInt); // error: 'Count value Not equal Total Result value'
    });

    it('Verify that if add 3 more counters with value 1; 2; 3; to existing default' +
        'Total value equals sum of all counters 0 + 1 + 2 + 3 => 6(total)', () => {
        let sum = 0;
        const defaultInput = $(defaultValueField);
        for (let i = 1; i <= 3; i++) {
            defaultInput.setValue(i);
            $(addCounterBtn).click();
            sum += i;
            const totalResultInt = $(totalResult).getText().split(' ')[1];
            expect(+totalResultInt).toBe(sum);
        }
        expect($$(counter).length).toBe(4); // verify 4 counters was created on a page
    });

    it('Verify that after click on reset button of last counter(has value 3 )' +
        ' total is changed accordingly count value equal (total)6 - 3 => 3', () => {
        const length = $$(resetBtn).length - 1;
        $$(resetBtn)[length].click();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(totalResultInt).toBe('3');
    });

    it('Verify that if delete button of 2-th counter (has value 1) is pressed' +
        ' total is changed accordingly count value equal (total)3 - 1 => 2', () => {
        $$(deleteBtn)[1].click();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(totalResultInt).toBe('2');
    });
// this test fails created bug report CCA-220
    it('Verify that after delete 2-nd counter click on Add Button(+3)' +
        'Total Value increase 2 + 3 => 5', () => {
        const addBtn3 = $('//div[@class="container-fluid counter-wrapper"][2]' +
            '//button[@class="btn-black btn Ripple-parent"][6]')
        addBtn3.click();
        const totalResultInt = $(totalResult).getText().split(' ')[1];
        expect(totalResultInt).toBe('5');
    });
});
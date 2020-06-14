const InitialValue = '[data-testid="counter-value-input"]';
const CounterTitle = '[data-testid="counter-name-input"]';
const btn = '.btn-success';



describe('Add counter button tests', () => {
  before('open counter app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should verify that Add Counter Button is disabled with empty Add name field', () => {
    $(CounterTitle).setValue(' ');
    $(CounterTitle).setValue('');
    expect (($(btn)).isEnabled()).toBe(false)
  })

  // it('should verify that Add Counter Button is disabled with empty Default value field', (qualifiedName, value) => {
  //   browser.refresh()
  //   // $(InitialValue).getValue().length;
  //   // for(let i = 0; i < InitialValue; i++){
  //   //   $(InitialValue).keys('');
  //   // }
  //   $(InitialValue).clearValue()
  //   expect ($(btn).isEnabled()).toBe(false);
  // })

  it('should verify that Add Counter Button is disabled with empty Add name field and Default value field', () => {
    browser.refresh()
    $(CounterTitle).setValue(' ');
    $(CounterTitle).setValue('');
    $(InitialValue).clearValue()
    expect ($(btn).isEnabled()).toBe(false);
  })

  it('should Verify that Add Counter Button is disabled when Default value field  = float number && Add name ' +
    'field less then 7 chars', () => {
    browser.refresh()
    $(CounterTitle).setValue('Hello!');
    $(InitialValue).setValue(1.4)
    expect ($(btn).isEnabled()).toBe(false);
  })

  it('should Verify that Add Counter Button is disabled when Default value field = 50  && Add name ' +
    'field = special character (@)', () => {
    browser.refresh()
    $(CounterTitle).setValue('@');
    $(InitialValue).setValue(50)
    expect ($(btn).isEnabled()).toBe(false);
  })

  // it('should Verify that Add Counter Button is disabled when Default value field = "E"  && Add name field = "Counter 4"', () => {
  //   browser.refresh()
  //   $(CounterTitle).setValue('Counter 4');
  //   $(InitialValue).setValue('E')
  //   expect ($(btn).isEnabled()).toBe(false);
  //   browser.pause(1000);
  // }) // не принимает не цифры
  //
  it('should Verify that Add Counter Button is disabled when Default value field = "60"  && Add name field accept value ' +
    'less then 7 chars ("123456")', () => {
    browser.refresh()
    $(CounterTitle).setValue('123456');
    $(InitialValue).setValue(60)
    expect ($(btn)).not.toBeEnabled();
  })

  it('should Verify "Add counter" button active if Default value field and Add name field are filled with default ' +
    'data (50, Counter name)', () => {
    browser.refresh()
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect ($(btn).isEnabled() && $(btn).isClickable()).toBe(true);
  })

  it('should Verify "Add counter" button active if Default value field = 100 and Add name field ' +
    '= "Counter 4" ', () => {
    browser.refresh()
    $(InitialValue).setValue(100);
    $(CounterTitle).setValue('Counter 4');
    expect ($(btn).isEnabled() && $(btn).isClickable()).toBe(true);
  })

  it('should Verify that new counter will appear after Add Counter Button is clicked with default fields', () => {
    browser.refresh()
    $(btn).click();
    const NewCounter = (browser.$('[class="container-fluid counter-wrapper"]'))
    expect (NewCounter.isDisplayed()).toBe(true);
  })

  it('should Verify that after a new counter has been added, its order number  = previous counters order number + 1 ', () => {
    const FirstCount = (browser.$('//h3[contains(text(),"1")]')).getText().split('')
    const SecondCount = (browser.$('//h3[contains(text(),"2")]')).getText().split('')
    const result = SecondCount[0]-FirstCount[0]
    expect (result).toEqual(1)
  })
});
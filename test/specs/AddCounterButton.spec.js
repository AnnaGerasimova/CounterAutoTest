// let CounterTitle = browser.$('[data-testid="counter-name-input"]')
// let InitialValue = browser.$('[data-testid="counter-value-input"]');
// let btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')

describe('Add counter button tests', () => {
  before('open counter app', () => {
    browser.url('https://likejean.github.io/homework-5/');
  });

  it('should verify that Add Counter Button is disabled with empty Add name field', () => {
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    // CounterTitle.clearValue();
    CounterTitle.setValue(' ');
    CounterTitle.setValue('');
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    browser.pause(1000);
    expect (btn.isDisplayed()).toEqual(false);
  })

  // it('should verify that Add Counter Button is disabled with empty Default value field', (qualifiedName, value) => {
  // browser.refresh()
  //   const InitialValue = browser.$('[data-testid="counter-value-input"]');
  //   InitialValue.clearValue()
  //   const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]');
  //   expect (btn.isDisplayed()).toEqual(false);
  //   browser.pause(5000)
  // })
  //
  it('should verify that Add Counter Button is disabled with empty Add name field and Default value field', () => {
    browser.refresh()
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    const InitialValue = browser.$('[data-testid="counter-value-input"]');
   //CounterTitle.clearValue();
    CounterTitle.setValue(' ');
    CounterTitle.setValue('');
    InitialValue.clearValue()
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed()).toEqual(false);
    browser.pause(1000);
  })

  it('should Verify that Add Counter Button is disabled when Default value field  = float number && Add name ' +
    'field less then 7 chars', () => {
    browser.refresh()
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    const InitialValue = browser.$('[data-testid="counter-value-input"]');
    CounterTitle.setValue('Hello!');
    InitialValue.setValue(1.4)
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed()).toEqual(false);
    browser.pause(1000);
  })

  it('should Verify that Add Counter Button is disabled when Default value field = 50  && Add name ' +
    'field = special character (@)', () => {
    browser.refresh()
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    const InitialValue = browser.$('[data-testid="counter-value-input"]');
    CounterTitle.setValue('@');
    InitialValue.setValue(50)
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed()).toEqual(false);
    browser.pause(1000);
  })

  // it('should Verify that Add Counter Button is disabled when Default value field = "A"  && Add name field = "Counter 4"', () => {
  //   browser.refresh()
  //   const CounterTitle = browser.$('[data-testid="counter-name-input"]')
  //   const InitialValue = browser.$('[data-testid="counter-value-input"]');
  //   CounterTitle.setValue('Counter 4');
  //   InitialValue.setValue('A')
  //   const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
  //   expect (btn.isDisplayed()).toEqual(false);
  //   browser.pause(1000);
  // }) // не принимает не цифры

  it('should Verify that Add Counter Button is disabled when Default value field = "60"  && Add name field accept value ' +
    'less then 7 chars ("123456")', () => {
    browser.refresh()
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    const InitialValue = browser.$('[data-testid="counter-value-input"]');
    CounterTitle.setValue('123456');
    InitialValue.setValue(60)
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed()).toEqual(false);
    browser.pause(1000);
  })

  it('should Verify "Add counter" button active if Default value field and Add name field are filled with default ' +
    'data (50, Counter name)', () => {
    browser.refresh()
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed() && btn.isClickable()).toEqual(true);
    browser.pause(1000);
  })

  it('should Verify "Add counter" button active if Default value field = 100 and Add name field ' +
    '= "Counter 4" ', () => {
    browser.refresh()
    const InitialValue = browser.$('[data-testid="counter-value-input"]');
    const CounterTitle = browser.$('[data-testid="counter-name-input"]')
    InitialValue.setValue(100);
    CounterTitle.setValue('Counter 4');
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    expect (btn.isDisplayed() && btn.isClickable()).toEqual(true);
    browser.pause(1000);
  })

  it('should Verify that new counter will appear after click after Add Counter Button is clicked with default fields', () => {
    browser.refresh()
    const btn = browser.$('[class="btn-success btn Ripple-parent add col-6"]')
    btn.click();
    const NewCount = (browser.$('[class="container-fluid counter-wrapper"]'))
    expect (NewCount.isDisplayed()).toEqual(true);
    browser.pause(1000);
  })

  it('should Verify that after a new counter has been added, its order number  = previous counters order number + 1 ', () => {
    const FirstCount = (browser.$('//h3[contains(text(),"1")]'))
    const SecondCount = (browser.$('//h3[contains(text(),"2")]'))
    expect (FirstCount.getText()).not.toEqual(SecondCount.getText());
    browser.pause(1000);
  })
});
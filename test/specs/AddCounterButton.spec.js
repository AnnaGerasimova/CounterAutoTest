const homeUrl = 'https://likejean.github.io/homework-5/';
const InitialValue = '[data-testid="counter-value-input"]';
const CounterTitle = '[data-testid="counter-name-input"]';
const btn = '.btn-success';


describe('Add counter button tests', () => {
  before('open counter app', () => {
    browser.url(homeUrl);
  });

  it('should verify that Add Counter Button is disabled with empty Add name field', () => {
    $(CounterTitle).setValue(' ');
    $(CounterTitle).setValue('');
    expect ($(btn)).toBeDisabled();
  })

  it('should verify that Add Counter Button is disabled with empty Default value field', () => {
    browser.refresh()
    $(InitialValue).click();
    $(InitialValue).getValue();
    for(let i = 0; i < InitialValue.length; i++){
        browser.keys('Back space');
      }
    expect ($(btn)).toBeDisabled();
  })

  it('should verify that Add Counter Button is disabled with empty Add name field and Default value field', () => {
    browser.refresh()
    $(CounterTitle).setValue(' ');
    $(CounterTitle).setValue('');
    $(InitialValue).click();
    $(InitialValue).getValue();
    for(let i = 0; i < InitialValue.length; i++){
      browser.keys('Back space');
    }
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value field  = float number && Add name ' +
    'field less then 7 chars', () => {
    browser.refresh()
    $(CounterTitle).setValue('Hello!');
    $(InitialValue).setValue(1.4)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value field = 50  && Add name ' +
    'field = special character (@)', () => {
    browser.refresh()
    $(CounterTitle).setValue('@');
    $(InitialValue).setValue(50)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value field = "E"  && Add name field = "Counter 4"', () => {
    browser.refresh()
    $(CounterTitle).setValue('Counter 4');
    $(InitialValue).click();
    $(InitialValue).getValue();
    for(let i = 0; i < InitialValue.length; i++){
      browser.keys('Back space');
    }
    $(InitialValue).setValue('E')
    expect ($(btn)).toBeDisabled();
    browser.pause(1000);
  })

  it('should Verify that Add Counter Button is disabled when Default value field = "60"  && Add name field accept value ' +
    'less then 7 chars ("123456")', () => {
    browser.refresh()
    $(CounterTitle).setValue('123456');
    $(InitialValue).setValue(60)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify "Add counter" button active if Default value field and Add name field are filled with default ' +
    'data (50, Counter name)', () => {
    browser.refresh()
    expect ($(btn)).toBeEnabled();
  })

  it('should Verify "Add counter" button active if Default value field = 100 and Add name field ' +
    '= "Counter 4" ', () => {
    browser.refresh()
    $(InitialValue).setValue(100);
    $(CounterTitle).setValue('Counter 4');
    expect ($(btn)).toBeEnabled();
  })

  it('should Verify that new counter will appear after Add Counter Button is clicked with default fields', () => {
    browser.refresh()
    $(btn).click();
    const NewCounter = browser.$('[class="container-fluid counter-wrapper"]')
    expect (NewCounter).toBeDisplayed();
  })

  it('should Verify that after a new counter has been added, its order number  = previous counters order number + 1 ', () => {
    const FirstCount = (browser.$('//h3[contains(text(),"1")]')).getText().split('')
    const SecondCount = (browser.$('//h3[contains(text(),"2")]')).getText().split('')
    const result = SecondCount[0]-FirstCount[0]
    expect (result).toEqual(1)
  })
});
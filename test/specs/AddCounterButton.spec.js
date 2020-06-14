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

  it('should verify that Add Counter Button is disabled with empty Add name and Default value fields', () => {
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

  it('should Verify that Add Counter Button is disabled when Default value = float num. && Add name < 7 chars', () => {
    $(CounterTitle).setValue('Hello!');
    $(InitialValue).setValue(1.4)
    expect ($(btn)).toBeDisabled();
  })

  // Bug report - CCA-206
  // it('should Verify that Add Counter But. is disabled when Default value = float num. && Add name - default', () => {
  //   browser.refresh()
  //   $(InitialValue).setValue(1.4)
  //   expect ($(btn)).toBeDisabled();
  // })

  it('should Verify that Add Counter Button is disabled when Default value = 50  && Add name = number', () => {
    $(CounterTitle).setValue(1);
    $(InitialValue).setValue(50)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = 50  && Add name = "@"', () => {
    $(CounterTitle).setValue('@');
    $(InitialValue).setValue(50)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = "E"  && Add name = "Counter 4"', () => {
    $(CounterTitle).setValue('Counter 4');
    $(InitialValue).click();
    $(InitialValue).getValue();
    for(let i = 0; i < InitialValue.length; i++){
      browser.keys('Back space');
    }
    $(InitialValue).setValue('E')
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = "60"  && Add name < 7 chars', () => {
    $(CounterTitle).setValue('123456');
    $(InitialValue).setValue(60)
    expect ($(btn)).toBeDisabled();
  })

  it('should Verify "Add counter" button active if Default value and Add name are filled with default data', () => {
    browser.refresh()
    expect ($(btn)).toBeEnabled();
  })

  it('should Verify "Add counter" button active if Default value = 100 and Add name = "Counter 4" ', () => {
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

  it('should Verify that after a new counter has been added, its order number = prev. counters order num. + 1 ', () => {
    const FirstCount = (browser.$('//h3[contains(text(),"1")]')).getText().split('')
    const SecondCount = (browser.$('//h3[contains(text(),"2")]')).getText().split('')
    const result = SecondCount[0]-FirstCount[0]
    expect (result).toEqual(1)
  })
});
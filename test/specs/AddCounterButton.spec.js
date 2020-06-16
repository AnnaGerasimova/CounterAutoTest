const homeUrl = 'https://likejean.github.io/homework-5/';
const initialValue = '[data-testid="counter-value-input"]';
const counterTitle = '[data-testid="counter-name-input"]';
const btn = '.btn-success';


describe('Add counter button tests', () => {
  before('open counter app', () => {
    browser.url(homeUrl);
  });

  it('should verify that Add Counter Button is disabled with empty Add name field', () => {
    $(counterTitle).setValue(' ');
    $(counterTitle).setValue('');
    expect($(btn)).toBeDisabled();
  })

  it('should verify that Add Counter Button is disabled with empty Default value field', () => {
    $(counterTitle).setValue('Counter Name')
    $(initialValue).click();
    $(initialValue).getValue();
    for (let i = 0; i < initialValue.length; i++) {
      browser.keys('Back space');
    }
    expect($(btn)).toBeDisabled();
  })

  it('should verify that Add Counter Button is disabled with empty Add name and Default value fields', () => {
    $(counterTitle).setValue(' ');
    $(counterTitle).setValue('');
    $(initialValue).click();
    $(initialValue).getValue();
    for (let i = 0; i < initialValue.length; i++) {
      browser.keys('Back space');
    }
    expect($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = float num. && Add name < 7 chars', () => {
    $(counterTitle).setValue('Hello!');
    $(initialValue).setValue(1.4)
    expect($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = 50  && Add name = number', () => {
    $(counterTitle).setValue(1);
    $(initialValue).setValue(50)
    expect($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = 50  && Add name = "@"', () => {
    $(counterTitle).setValue('@');
    $(initialValue).setValue(50)
    expect($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = "E"  && Add name = "Counter 4"', () => {
    $(counterTitle).setValue('Counter 4');
    $(initialValue).click();
    $(initialValue).getValue();
    for (let i = 0; i < initialValue.length; i++) {
      browser.keys('Back space');
    }
    $(initialValue).setValue('E')
    expect($(btn)).toBeDisabled();
  })

  it('should Verify that Add Counter Button is disabled when Default value = "60"  && Add name < 7 chars', () => {
    $(counterTitle).setValue('123456');
    $(initialValue).setValue(60)
    expect($(btn)).toBeDisabled();
  })

  it('should Verify "Add counter" button active if Default value and Add name are filled with default data', () => {
    $(counterTitle).setValue('Counter Name');
    $(initialValue).setValue(50)
    expect($(btn)).toBeEnabled();
  })

  it('should Verify "Add counter" button active if Default value = 100 and Add name = "Counter 4" ', () => {
    $(initialValue).setValue(100);
    $(counterTitle).setValue('Counter 4');
    expect($(btn)).toBeEnabled();
  })

  it('should Verify that new counter will appear after Add Counter Button is clicked with default fields', () => {
    $(counterTitle).setValue('Counter Name');
    $(initialValue).setValue(50)
    $(btn).click();
    const NewCounter = browser.$('[class="container-fluid counter-wrapper"]')
    expect(NewCounter).toBeDisplayed();
  })

  it('should Verify that after a new counter has been added, its order number = prev. counters order num. + 1 ', () => {
    const FirstCount = (browser.$('//h3[contains(text(),"1")]')).getText().split('')
    const SecondCount = (browser.$('//h3[contains(text(),"2")]')).getText().split('')
    const result = SecondCount[0] - FirstCount[0]
    expect(result).toEqual(1)
  })
});
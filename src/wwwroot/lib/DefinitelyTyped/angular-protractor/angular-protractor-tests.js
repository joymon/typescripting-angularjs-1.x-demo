/// <reference path="angular-protractor.d.ts" />
function TestWebDriverExports() {
    var button = protractor.Button.LEFT;
    var key = protractor.Key.ADD;
    var chord = protractor.Key.chord(protractor.Key.NUMPAD0, protractor.Key.NUMPAD1);
    var driver = new protractor.Builder().
        withCapabilities(protractor.Capabilities.chrome()).
        build();
    var baseDriver = driver;
    var action = new protractor.ActionSequence(driver);
    var baseAction = action;
    var browser = protractor.Browser.ANDROID;
    var builder = new protractor.Builder();
    var baseBuilder = builder;
    var capability = protractor.Capability.BROWSER_NAME;
    var capabilities = protractor.Capabilities.chrome();
    var baseCapabilities = capabilities;
    var commandName = protractor.CommandName.CLICK_ELEMENT;
    var command = new protractor.Command(protractor.CommandName.CLICK);
    var baseCommand = command;
    var eventEmitter = new protractor.EventEmitter();
    var baseEventEmitter = eventEmitter;
    var webElement = new protractor.WebElement(driver, new protractor.promise.Promise());
    var baseWebElement = webElement;
    var locator = by.id('abc');
    var session = new protractor.Session('ABC', webdriver.Capabilities.android());
    var baseSession = session;
    locator = protractor.By.name('name');
    var driver = new protractor.WebDriver(session, {});
    driver = new protractor.WebDriver(session, {}, new webdriver.promise.ControlFlow());
    var baseDriver = driver;
    var webElement = new protractor.WebElement(driver, { ELEMENT: 'abc' });
    var baseWebElement = webElement;
    var webElementPromise = new protractor.WebElementPromise(driver, { ELEMENT: 'abc' });
    var baseWebElementPromise = webElementPromise;
}
function TestWebDriverErrorModule() {
    var errorCode = protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE;
    var error = new protractor.error.Error(protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE);
    var baseError = error;
}
function TestWebDriverLoggingModule() {
    var levelName = protractor.logging.Level.ALL.name;
    var loggingType = protractor.logging.Type.CLIENT;
    var level = protractor.logging.Level.ALL;
    var entry = new protractor.logging.Entry(protractor.logging.Level.ALL, 'Message');
    var baseEntry = entry;
    level = protractor.logging.getLevel('DEBUG');
    var prefs = new protractor.logging.Preferences();
}
function TestWebDriverPromiseModule() {
    var cancelError = new protractor.promise.CancellationError();
    cancelError = new protractor.promise.CancellationError('message');
    var baseCancelError = cancelError;
    var thenable = new protractor.promise.Thenable();
    var baseThenable = thenable;
    var promise = new protractor.promise.Promise();
    var basePromise = promise;
    var deferred = new protractor.promise.Deferred();
    var baseDeferred = deferred;
    var flow = new protractor.promise.ControlFlow();
    var baseFlow = flow;
    var arrayPromise = protractor.promise.all([new protractor.promise.Promise(), new protractor.promise.Promise()]);
    protractor.promise.asap(promise, function (value) { return true; });
    protractor.promise.asap(promise, function (value) { }, function (err) { return 'ABC'; });
    promise = protractor.promise.checkedNodeCall(function (err, value) { return 123; });
    promise = protractor.promise.consume(function () {
        return 5;
    });
    promise = protractor.promise.consume(function () {
        return 5;
    }, this);
    promise = protractor.promise.consume(function () {
        return 5;
    }, this, 1, 2, 3);
    flow = protractor.promise.controlFlow();
    promise = protractor.promise.createFlow(function (newFlow) { });
    deferred = protractor.promise.defer();
    promise = protractor.promise.delayed(123);
    var numbersPromise = protractor.promise.filter([1, 2, 3], function (el, index, arr) {
        return true;
    });
    numbersPromise = protractor.promise.filter([1, 2, 3], function (el, index, arr) {
        return true;
    }, this);
    numbersPromise = protractor.promise.filter(numbersPromise, function (el, index, arr) {
        return true;
    });
    numbersPromise = protractor.promise.filter(numbersPromise, function (el, index, arr) {
        return true;
    }, this);
    numbersPromise = protractor.promise.map([1, 2, 3], function (el, index, arr) {
        return true;
    });
    numbersPromise = protractor.promise.map([1, 2, 3], function (el, index, arr) {
        return true;
    }, this);
    numbersPromise = protractor.promise.map(numbersPromise, function (el, index, arr) {
        return true;
    });
    numbersPromise = protractor.promise.map(numbersPromise, function (el, index, arr) {
        return true;
    }, this);
    promise = protractor.promise.fulfilled();
    promise = protractor.promise.fulfilled({ a: 123 });
    promise = protractor.promise.fullyResolved({ a: 123 });
    var bool = protractor.promise.isGenerator(function () { });
    var bool = protractor.promise.isPromise('ABC');
    promise = protractor.promise.rejected({ a: 123 });
    protractor.promise.setDefaultFlow(new webdriver.promise.ControlFlow());
    promise = protractor.promise.when(promise, function (value) { return 123; }, function (err) { return 123; });
}
function TestWebDriverStacktraceModule() {
    var bool = protractor.stacktrace.BROWSER_SUPPORTED;
    var frame = new protractor.stacktrace.Frame();
    var baseFrame = frame;
    var snapshot = new protractor.stacktrace.Snapshot();
    var baseSnapshot = snapshot;
    var err = protractor.stacktrace.format(new Error("Error"));
    var frames = protractor.stacktrace.get();
}
function TestWebDriverUntilModule() {
    var conditionB = new protractor.until.Condition('message', function (driver) { return true; });
    var conditionBBase = conditionB;
    var conditionWebElement;
    var conditionWebElements;
    conditionB = protractor.until.ableToSwitchToFrame(5);
    var conditionAlert = protractor.until.alertIsPresent();
    var el = element(by.id('id'));
    conditionB = protractor.until.elementIsDisabled(el);
    conditionB = protractor.until.elementIsEnabled(el);
    conditionB = protractor.until.elementIsNotSelected(el);
    conditionB = protractor.until.elementIsNotVisible(el);
    conditionB = protractor.until.elementIsSelected(el);
    conditionB = protractor.until.elementIsVisible(el);
    conditionB = protractor.until.elementTextContains(el, 'text');
    conditionB = protractor.until.elementTextIs(el, 'text');
    conditionB = protractor.until.elementTextMatches(el, /text/);
    conditionB = protractor.until.stalenessOf(el);
    conditionB = protractor.until.titleContains('text');
    conditionB = protractor.until.titleIs('text');
    conditionB = protractor.until.titleMatches(/text/);
    conditionWebElement = protractor.until.elementLocated(by.id('id'));
    conditionWebElements = protractor.until.elementsLocated(by.className('class'));
}
function TestWebDriverExpectedConditionsModule() {
    var conditionB;
    var el = element(by.id('id'));
    conditionB = protractor.ExpectedConditions.alertIsPresent();
    conditionB = protractor.ExpectedConditions.elementToBeClickable(el);
    conditionB = protractor.ExpectedConditions.textToBePresentInElement(el, 'text');
    conditionB = protractor.ExpectedConditions.textToBePresentInElementValue(el, 'text');
    conditionB = protractor.ExpectedConditions.titleContains('text');
    conditionB = protractor.ExpectedConditions.titleIs('text');
    conditionB = protractor.ExpectedConditions.presenceOf(el);
    conditionB = protractor.ExpectedConditions.stalenessOf(el);
    conditionB = protractor.ExpectedConditions.visibilityOf(el);
    conditionB = protractor.ExpectedConditions.invisibilityOf(el);
    conditionB = protractor.ExpectedConditions.elementToBeSelected(el);
    conditionB = protractor.ExpectedConditions.not(protractor.ExpectedConditions.alertIsPresent());
    conditionB = protractor.ExpectedConditions.and(protractor.ExpectedConditions.alertIsPresent(), protractor.ExpectedConditions.elementToBeClickable(el));
    conditionB = protractor.ExpectedConditions.or(protractor.ExpectedConditions.alertIsPresent(), protractor.ExpectedConditions.elementToBeClickable(el));
}
function TestProtractor() {
    var ptor;
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    ptor = protractor.wrapDriver(driver);
    ptor = protractor.wrapDriver(driver, 'baseUrl');
    ptor = protractor.wrapDriver(driver, 'baseUrl', 'rootElement');
    ptor = browser;
    var actions = ptor.actions();
    var promise = ptor.call(function () { });
    var promise = ptor.call(function () { }, this);
    var promise = ptor.call(function (a, b, c) { }, this, 1, 2, 3);
    promise = ptor.executeAsyncScript('SomeScript');
    promise = ptor.executeAsyncScript('SomeScript', 1, 2, 3);
    promise = ptor.executeAsyncScript(function () { });
    promise = ptor.executeAsyncScript(function (a, b, c) { }, 1, 2, 3);
    promise = ptor.executeScript('SomeScript');
    promise = ptor.executeScript('SomeScript', 1, 2, 3);
    promise = ptor.executeScript(function () { });
    promise = ptor.executeScript(function (a, b, c) { }, 1, 2, 3);
    ptor = browser.forkNewDriverInstance();
    ptor = browser.forkNewDriverInstance(true);
    ptor = browser.forkNewDriverInstance(true, false);
    driver = ptor.driver;
    var baseUrl = ptor.baseUrl;
    var rootEl = ptor.rootEl;
    var ignoreSynchronization = ptor.ignoreSynchronization;
    var params = ptor.params;
    ptor.resetUrl = "url";
    ptor.debugger();
    ptor.close();
    var controlFlow = ptor.controlFlow();
    var webElement = ptor.findElement(by.css('.class'));
    ptor.findElements(by.css('.class')).then(function (elements) { });
    ptor.isElementPresent(by.css('.class')).then(function (present) { });
    ptor.isElementPresent(webElement).then(function (present) { });
    ptor.clearMockModules();
    ptor.addMockModule('name', 'script');
    ptor.addMockModule('name', function () { });
    ptor.removeMockModule('name');
    ptor.waitForAngular();
    var elementFinder;
    var elementArrayFinder;
    elementFinder = ptor.element(by.id('ABC'));
    elementFinder = ptor.$('.class');
    elementArrayFinder = ptor.$$('.class');
    var locationAbsUrl = ptor.getLocationAbsUrl();
    ptor.setLocation('webaddress.com');
    var voidPromise = ptor.get('webaddress.com');
    voidPromise = ptor.get('webdaddress.com', 45);
    voidPromise = ptor.quit();
    voidPromise = ptor.sleep(5000);
    ptor.refresh();
    ptor.refresh(45);
    var navigation = ptor.navigate();
    ptor.pause();
    ptor.pause(8080);
    ptor.getAllWindowHandles().then(function (handles) { });
    var capabilities = ptor.getCapabilities();
    var stringPromise;
    stringPromise = ptor.getCurrentUrl();
    stringPromise = ptor.getPageSource();
    stringPromise = ptor.getTitle();
    stringPromise = ptor.getWindowHandle();
    stringPromise = ptor.takeScreenshot();
    ptor.getPageTimeout = 5000;
    var session = ptor.getSession();
    var options = ptor.manage();
    promise = ptor.schedule(new protractor.Command(protractor.CommandName.ACCEPT_ALERT), 'asdf');
    var targetLocator = ptor.switchTo();
    ptor.wait(protractor.until.elementLocated(by.id('id')), 5000).then(function (el) { });
    ;
    ptor.wait(protractor.until.elementLocated(by.id('id')), 5000, 'message').then(function (el) { });
    ;
}
function TestElement() {
    var elementFinder = element(by.id('id'));
    var elementArrayFinder = element.all(by.className('class'));
}
function TestElementFinder() {
    var elementFinder = element(by.id('id'));
    var voidPromise;
    var stringPromise;
    var booleanPromise;
    elementFinder.getId().then(function (id) { });
    voidPromise = elementFinder.click();
    elementFinder = elementFinder.allowAnimations('string');
    voidPromise = elementFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    stringPromise = elementFinder.getTagName();
    stringPromise = elementFinder.getCssValue('display');
    stringPromise = elementFinder.getAttribute('atribute');
    stringPromise = elementFinder.getText();
    elementFinder.getSize().then(function (size) { });
    elementFinder.getLocation().then(function (location) { });
    booleanPromise = elementFinder.isEnabled();
    booleanPromise = elementFinder.isSelected();
    voidPromise = elementFinder.submit();
    voidPromise = elementFinder.clear();
    booleanPromise = elementFinder.isDisplayed();
    stringPromise = elementFinder.getOuterHtml();
    stringPromise = elementFinder.getInnerHtml();
    booleanPromise = elementFinder.isElementPresent(by.id('id'));
    elementFinder = elementFinder.$('.class');
    var finders = elementFinder.$$('.class');
    elementFinder = elementFinder.evaluate('expression');
    booleanPromise = elementFinder.isPresent();
    var webElement = elementFinder.getWebElement();
    finders = elementFinder.all(by.className('class'));
    elementFinder = elementFinder.allowAnimations('abc');
    elementFinder = elementFinder.clone();
    elementFinder = elementFinder.element(by.id('id'));
    var b = elementFinder.isPending();
    var locator = elementFinder.locator();
}
function TestElementArrayFinder() {
    var elementArrayFinder = element.all(by.id('id'));
    var voidPromise;
    var stringPromise;
    var booleanPromise;
    elementArrayFinder.getId().then(function (id) { });
    voidPromise = elementArrayFinder.click();
    elementArrayFinder = elementArrayFinder.allowAnimations(true);
    voidPromise = elementArrayFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    stringPromise = elementArrayFinder.getTagName();
    stringPromise = elementArrayFinder.getCssValue('display');
    stringPromise = elementArrayFinder.getAttribute('atribute');
    stringPromise = elementArrayFinder.getText();
    elementArrayFinder.getSize().then(function (size) { });
    elementArrayFinder.getLocation().then(function (location) { });
    booleanPromise = elementArrayFinder.isEnabled();
    booleanPromise = elementArrayFinder.isSelected();
    voidPromise = elementArrayFinder.submit();
    voidPromise = elementArrayFinder.clear();
    booleanPromise = elementArrayFinder.isDisplayed();
    stringPromise = elementArrayFinder.getOuterHtml();
    stringPromise = elementArrayFinder.getInnerHtml();
    var finders = elementArrayFinder.$$('.class');
    elementArrayFinder = elementArrayFinder.evaluate('expression');
    finders = elementArrayFinder.all(by.className('class'));
    elementArrayFinder = elementArrayFinder.clone();
    var b = elementArrayFinder.isPending();
    var locator = elementArrayFinder.locator();
    var findersArrayPromise = elementArrayFinder.asElementFinders_();
    var driverElementArray = elementArrayFinder.getWebElements();
    var elementFinder = elementArrayFinder.get(42);
    elementFinder = elementArrayFinder.first();
    elementFinder = elementArrayFinder.last();
    elementFinder = elementArrayFinder.toElementFinder_();
    var numberPromise = elementArrayFinder.count();
    elementArrayFinder.each(function (element) {
        // nothing
    });
    stringPromise = elementArrayFinder.map(function (element, index) {
        return 'abc';
    });
    stringPromise = elementArrayFinder.map(function (element, index) {
        return 'abc';
    });
    stringPromise = elementArrayFinder.map(function (element, index) {
        return element.getText();
    });
    elementArrayFinder = elementArrayFinder.filter(function (element, index) {
        return element.getText().then(function (text) {
            return text === "foo";
        });
    });
    elementArrayFinder.reduce(function (accumulator, element) {
        return element.getText().then(function (text) {
            return accumulator + ',' + text;
        });
    }, '').then(function (result) { });
    elementArrayFinder.reduce(function (accumulator, element, index, array) {
        return element.getText().then(function (text) {
            return accumulator + ',' + text;
        });
    }, '').then(function (result) { });
    elementArrayFinder.then(function (underlyingElementFinders) {
        //nothing
    });
}
// This function tests the locator strategies.
function TestLocatorStrategies() {
    var ptor = browser;
    var webElement;
    protractor.By.addLocator('customLocator', 'script');
    protractor.By.addLocator('customLocator2', function () {
        // nothing
    });
    // Angular specific locators.
    webElement = ptor.findElement(protractor.By.binding('binding'));
    webElement = ptor.findElement(protractor.By.exactBinding('exactBinding'));
    webElement = ptor.findElement(protractor.By.model('model'));
    webElement = ptor.findElement(protractor.By.repeater('repeater'));
    webElement = ptor.findElement(protractor.By.repeater('repeater').column(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0).column(0));
    webElement = ptor.findElement(protractor.By.buttonText('buttonText'));
    webElement = ptor.findElement(protractor.By.partialButtonText('partialButtonText'));
    webElement = ptor.findElement(protractor.By.cssContainingText('cssSelector', 'search text'));
    webElement = ptor.findElement(protractor.By.options('options'));
    // One standard locator for good measure.
    webElement = ptor.findElement(protractor.By.id('id'));
    var el;
    // Angular specific locators.
    el = element(by.binding('binding'));
    el = element(by.exactBinding('exactBinding'));
    el = element(by.model('model'));
    el = element(by.repeater('repeater'));
    el = element(by.repeater('repeater').column(0));
    el = element(by.repeater('repeater').row(0));
    el = element(by.repeater('repeater').row(0).column(0));
    el = element(by.buttonText('buttonText'));
    el = element(by.partialButtonText('partialButtonText'));
    el = element(by.cssContainingText('cssSelector', 'search text'));
    el = element(by.options('options'));
    // One standard locator for good measure.
    el = element(by.id('id'));
}

# Testing Javascript with Jasmine (BDD)

## Jasmine Primer

  1. About Jasmine
    - BDD framework for testing Javascript code
    - Doesn't have any dependencies
    - Doesn't require a DOM to run
  2. Test Suites
    - Describe what you're testing (A Calculator, An Angular Controller, etc..)
    - Contains a set of specs
    - **Syntax**:
    ```
    describe('My Object',function() {
      // a set of specs go here
    });
    ```
  3. Test Specs
    - Test a unit of functionality of what you’re testing. Usually a function, an interface.
  	- **Syntax**:
  	```
  	it('should do something useful', function() {
  	  // a set of assertions go here
  	});
  	```
  4. Expectation
  - An expectation is built with the function expect, which takes a value called actual, it chains with a
  Matcher function, which takes the expected value.
  - **Syntax**:
  ```
  var actual = foo.bar(),
      expected = true;
  expect(actual).toEqual(expected);
  ```
  5. Matcher
    - Boolean comparison between the actual value and the expected value.
    	- Responsible for reporting to Jasmine if the expectation is true or false.
    	- Jasmine will pass or fail the spec.
    	- You can also create custom matchers, when project’s domain calls for specific assertions
    	- **Some matchers**:
    	.toEqual()
    	.toBe()
    	.toBeTruthy()
    	.toBeFalsy()
  6. Grouping Related Specs
    	- You can group related specs, with a describe block. This is useful for readability, and if you name them well,
    	your specs read like sentences, used in BDD style.
  7. Setup & Teardown
    - To setup your tests, use the Jasmine global function `beforeEach`
    - To tear down, or cleanup after you've performed your tests, use the Jasmine global function `afterEach`
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
  4. Expectation `expect`
  5. Matcher
  6. Grouping Related Specs
  7. Setup & Teardown with `beforeEach` & `afterEach`


# Testing Javascript with Jasmine (BDD)

***PS.** This document is based on the [Jasmine Official Documentation](http://jasmine.github.io/2.3/introduction.html), and it's purpose is to highlight the most used features of the framework.*

## Table of content

#### Jasmine Primer
1. Overflow
2. Test Suites
3. Test Specs
4. Expectations
5. Matchers
6. Grouping Related Specs
7. Setup & Teardown 

## Jasmine Primer

### Overview
  
- BDD framework for testing Javascript code
- Doesn't have any dependencies *(no need for jQuery or Underscore)*
- Doesn't require a DOM to run *(you can run Jasmine from the terminal)*

### Test Suites
    
- Used to group tests of an entity like a class, constructor function, Angular directive, controller, service, etc...
- Contains a set of specs related to the entity being tested.

	**Syntax**:
    
	```
	describe('My Object',function() {
	
		// a set of specs go here
		
	});
	```
    	
### Test Specs
- Test a unit of functionality of what you’re testing. Usually a **function**, an **interface**.

- **Syntax**:  	

	```
	it('should do something useful', function() {
	
		// a set of assertions go here

	});
	```
  	
### Expectation
- An expectation is built with the function expect, which takes a value called actual, it chains with a matcher function, which takes the expected value.
- **Syntax**:
    
	```
	// the actual value you're testing.
	var actual = foo.bar();
	
	// what you expect the actual value to be/match.
	var expected = true;
	
	expect(actual).toEqual(expected);
	```
    
### Matcher
- Boolean comparison between the actual value and the expected value.
- Responsible for reporting to Jasmine if the expectation is true or false.
- Jasmine will pass or fail the spec.
- You can also create custom matchers, when project’s domain calls for specific assertions

- **Some matchers**:
  	
	``` 
	
	var actual = 'some value';
	var expected = 'expected value';

	// checks equivalence (when checking string, numbers, primitive values in general)
	expect(actual).toEqual(expected);
	
	// check if it's the exact same object
	expect(actual).toBe(expected);

	// boolean checks
	expect.toBeTruthy(expected);    
	expect(actual).toBeFalsy(expected);
	```
    
- Stack Overflow: [The difference between toEqual and toBe](http://stackoverflow.com/questions/22413009/javascript-using-methods-to-compare)

### Grouping Related Specs
- You can group related specs, with a describe block. This is useful for readability, and if you name them well, your specs read like sentences, used in BDD style.

### Setup & Teardown

- To setup your tests, use the Jasmine global function `beforeEach`
- To tear down, or cleanup after you've performed your tests, use the Jasmine global function `afterEach`



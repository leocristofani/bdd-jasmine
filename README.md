# Testing Javascript with Jasmine (BDD)

*PS. This document is based on the [Jasmine Official Documentation](http://jasmine.github.io/2.3/introduction.html), and its purpose is to highlight the most used features of the framework. It also gives an overflow on how to test Angular controllers, directives and services.*

## Table of content

#### Jasmine Primer

1. Overflow
2. Test Suites
3. Test Specs
4. Expectations
5. Matchers
6. Grouping Related Specs
7. Setup & Teardown 

#### Testing Angular
	
1. Setup (Jasmine, Karma & Grunt)
2. How to run unit tests from the terminal
3. Testing controllers
4. Testing directives with an internal template
5. Testing directives with an external template
6. Testing services and factories


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
- You can add more than one expectation to a spec
- **Syntax**:
    
```
// the actual value you're testing.
var actual = foo.bar();
	
// what you expect the actual value to be/match.
var expected = true;
	
expect(actual).toEqual(expected);
expect(foo.bar('param')).toBeFalsy();
```
    
### Matcher
- Boolean comparison between the actual value and the expected value.
- Responsible for reporting to Jasmine if the expectation is true or false.
- Jasmine will pass or fail the spec.

- **Most used matchers**:
  	
```
var actual = 'some value';
var expected = 'expected value';

// checks equivalence (usually when checking primitives)
expect(actual).toEqual(expected);
	
// check if it's the exact same object
expect(actual).toBe(expected);

// boolean checks
expect.toBeTruthy(expected);    
expect(actual).toBeFalsy(expected);
```
    
- Stack Overflow: [The difference between toEqual and toBe](http://stackoverflow.com/questions/22413009/javascript-using-methods-to-compare)
- **Special matchers**:

```
// jasmine.any() - returns true if the constructor matches the constructor of the actual value
expect({}).toEqual(jasmine.any(Object));
expect(12).toEqual(jasmine.any(Number));

// jasmine.anything() - returns true of the actual is not null nor undefined
expect(1).toEqual(jasmine.anything());

```

- You can find many more useful special matchers like `jasmine.objectContaining()`, `jasmine.arrayContaining` and `jasmine.stringMatching` in the [Jasmine documentation](http://jasmine.github.io/2.3/introduction.html#section-Matching_Anything_with_<code>jasmine.any</code>).
- If your project requires **custom matchers**, you're all set with Jasmine. [Check out the documentation](http://jasmine.github.io/2.3/custom_matcher.html).


### Grouping Related Specs
- You can group related specs, with a describe block. This is useful for readability, and if you name them well, your specs read like sentences, used in BDD style.

```
describe(function('A Calculator', function() {

	describe('when adding', function() {
		it('should add two numbers');
		it('should add three numbers');
	});
	
	it('should subtract 2 numbers');
	
});		
```


### Setup & Teardown

- To setup your tests, use the Jasmine global function `beforeEach`
- To tear down, or cleanup after you've performed your tests, use the Jasmine global function `afterEach`



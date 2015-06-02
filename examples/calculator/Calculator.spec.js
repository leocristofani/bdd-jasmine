describe('Calculator', function() {

	var calculator;

	beforeEach(function() {
		calculator = new Calculator();
	});

	afterEach(function() {
		// clean up after yourself
	});

	describe('when adding', function() {
		it('should add two numbers', function() {
			var actual = calculator.add(1,2),
			    expected = 3;
			expect(actual).toEqual(expected);
		});
		it('should add three numbers', function() {
			var actual = calculator.add(1,2,3),
			    expected = 6;
			expect(actual).toEqual(expected);
		});
	});

	it('should subtract two numbers', function() {
		var actual = calculator.subtract(2,1),
		    expected = 1;
		expect(actual).toEqual(expected);
	});

	xit('should multiply two numbers');

});
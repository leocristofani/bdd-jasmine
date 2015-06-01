describe('A Calculator', function () {

	var calculator;

	/**
	 * Setup
	 */
	beforeEach(function () {
		calculator = new Calculator(true);
		console.log('-- before');
	});

	/**
	 * Tear down
	 */
	afterEach(function() {
		console.log('after --');
	});

	/**
	 * You can group related functionality
	 */
	describe('when adding', function () {

		it('should add two numbers', function () {

			console.log('during');

			var actual   = calculator.add(2, 2),
			    expected = 4;

			expect(actual).toEqual(expected);
		});

		it('should add three numbers', function () {

			var actual   = calculator.add(1, 2, 3),
			    expected = 6;

			expect(actual).toEqual(expected);
		});

	});

	it('should subtract two numbers', function () {

		var actual   = calculator.subtract(5, 4),
		    expected = 1;

		expect(actual).toEqual(expected);

	});

	xit('should be fast', function() {

		var actual = calculator.isNew(),
		    expected = true;

		expect(actual).toBeTruthy();

	});

});
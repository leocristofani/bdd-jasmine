var Calculator = function () {
};

Calculator.prototype.add = function (a, b, c) {
	if (c) {
		return a + b + c;
	}
	return a + b;
};

Calculator.prototype.subtract = function (a, b) {
	return a - b;
};


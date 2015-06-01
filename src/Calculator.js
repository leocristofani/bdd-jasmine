var Calculator = function (isNew) {
	this._isNew = isNew;
};

Calculator.prototype.add = function (a, b, c) {
	if (c) {
		return a + b + c;
	} else {
		return a + b;
	}
};

Calculator.prototype.subtract = function (a, b) {
	return a - b;
};

Calculator.prototype.isNew = function() {
	return this._isNew;
};
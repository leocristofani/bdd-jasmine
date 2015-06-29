(function () {

	'use strict';

	describe('AFDirective', function() {

		var scope, element, mockZipCode;

		/**
		 * 1. The first thing you need to do to before you test
		 * an Angular object is to make the Angular Module available.
		 */
		beforeEach(module('AFModule'));

		/**
		 * 2. Then you need to prepare the Angular object you want to test,
		 * together with it's dependencies.
		 */
		beforeEach(inject(function($rootScope, $compile) {

			mockZipCode = '02011200';

			/**
			 * 3. Notice that you don't need the entire html structure to test a directive,
			 * just enough to be able to test it.
			 */
			var mockHtml = [
				'<form af-directive data-zipcode-field="cep">',
					'<input type="text" name="cep" ng-model="address.cep" id="cep"/>',
					'<input type="text" name="uf" id="uf" ng-model="address.uf" disabled="disabled"/>',
					'<button class="btn btn-success" disabled="disabled">Submit</button>',
				'</form>'
			].join('');

			/**
			 * 4. This is the same element that's available inside the link function
			 * of the directive. You can interact with it the same way.
			 */
			element = angular.element(mockHtml);

			/**
			 * 5. Every directive needs a scope. In this case, we're mocking the scope
			 * of the controller (AFCtrl).
			 */
			scope = $rootScope.$new();
			scope.address = {};
			scope.updateAddress = function() {};

			$compile(element)(scope);

			scope.$digest();
		}));

		it('should auto complete form when zipCode field is blurred', function() {

			var $zipCodeField = $(element).find('#cep');
			$zipCodeField.val(mockZipCode);

			/**
			 * 6. spyOn is used to check if a function on an object has been called.
			 * You can also check what parameters our passed.
			 */
			spyOn(scope, 'updateAddress');
			$zipCodeField.blur();

			expect(scope.updateAddress).toHaveBeenCalledWith(mockZipCode);
		});


		it('should enable fields when zipCode field is blurred', function() {

			var $zipCodeField = $(element).find('#cep');
			var $ufField = $(element).find('#uf');

			expect($ufField.is(':disabled')).toBeTruthy();

			$zipCodeField.val(mockZipCode);
			$zipCodeField.blur();

			expect($ufField.is(':disabled')).toBeFalsy();

		});

	});

}());
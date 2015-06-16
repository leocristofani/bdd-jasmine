(function () {

	'use strict';

	describe('AFDirective', function() {

		var scope, element, mockZipCode;

		beforeEach(module('AFModule'));

		beforeEach(inject(function($rootScope, $compile) {

			mockZipCode = '02011200';

			var mockHtml = [
				'<form af-directive>',
					'<input type="text" name="cep" ng-model="address.cep" id="cep"/>',
					'<input type="text" name="uf" id="uf" ng-model="address.uf" disabled="disabled"/>',
					'<button class="btn btn-success" disabled="disabled">Submit</button>',
				'</form>'
			].join('');

			element = angular.element(mockHtml);

			scope = $rootScope.$new();
			scope.address = {};
			scope.updateAddress = function() {};

			$compile(element)(scope);

			scope.$digest();
		}));

		it('should auto complete form when zipCode field is blurred', function() {

			var $zipCodeField = $(element).find('#cep');
			$zipCodeField.val(mockZipCode);

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
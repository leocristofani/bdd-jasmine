(function () {

	'use strict';

	describe('AFCtrl', function () {

		var scope;

		/**
		 * 1. The first thing you need before testing an Angular object,
		 * is to make the Angular object's module available.
		 * The module() callback is made available by angular-mocks.js
		 */
		beforeEach(module('AFModule'));

		/**
		 * 2. AFService is a dependency of AFCtrl.
		 * See below how to mock AFService to be consumed by AFCtrl
		 */
		beforeEach(function() {

			module(function($provide) {
				$provide.factory('AFService', function($q) {
					var _getAddressFromZipCode = jasmine.createSpy('getAddressFromZipCode').and.callFake(function(zipCode) {
						var deferred = $q.defer();
						deferred.resolve({data: {uf: 'SP', cep: zipCode}});
						return deferred.promise;
					});

					return {
						getAddressFromZipCode: _getAddressFromZipCode
					};
				});
			});

		});

		/**
		 * 3. Then you need to prepare the Angular object you want to test,
		 * together with it's dependencies.
		 */
		beforeEach(inject(function ($controller, $rootScope, _AFService_) {

			scope = $rootScope.$new();

			/**
			 * 4. This is how you setup the controller, with it's dependencies.
			 */
			$controller('AFCtrl', {
				$scope: scope,
				AFService: _AFService_ // _AFService_ is not the actual factory, but the mocked out version.
			});

		}));

		it('should start with an empty address', function () {
			expect(scope.address).toBeDefined();
		});

		it('should update address', function () {
			var mockZipCode = '02011200';
			scope.updateAddress(mockZipCode);
			scope.$digest();
			expect(scope.address.uf).toEqual('SP');
			expect(scope.address.cep).toEqual(mockZipCode);
		});

	});

}());
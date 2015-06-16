(function () {

	'use strict';

	describe('AFCtrl', function () {

		var AFCtrl, scope, AFService;

		beforeEach(module('AFModule'));

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

		beforeEach(inject(function ($controller, $rootScope, _AFService_) {

			scope = $rootScope.$new();
			AFService = _AFService_;

			$controller('AFCtrl', {
				$scope: scope,
				AFService: AFService
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
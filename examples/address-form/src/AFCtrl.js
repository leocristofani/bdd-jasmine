(function () {

	'use strict';

	function AFCtrl($scope, AFService) {
		$scope.address = {};

		$scope.updateAddress = function(zipCode) {
			AFService.getAddressFromZipCode(zipCode).then(function(results) {
				$scope.address = results.data;
			});
		};
	}

	angular
		.module('AFModule')
		.controller('AFCtrl', ['$scope', 'AFService', AFCtrl]);

}());
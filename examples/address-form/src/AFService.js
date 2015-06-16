(function () {

	'use strict';

	function AFService($http) {

		function _getAddressFromZipCode(zipCode) {
			var url = ['http://cep.correiocontrol.com.br/', zipCode, '.json'].join('');
			return $http.get(url);
		}

		return {
			getAddressFromZipCode: _getAddressFromZipCode
		};
	}

	angular
		.module("AFModule")
		.factory('AFService', ['$http', AFService]);

}());
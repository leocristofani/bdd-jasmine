(function () {

	'use strict';

	function AFDirective() {

		return {
			link: function(scope, element, attr) {

				var $el = $(element);

				$el.find('#cep').on('blur', function() {

					var zipCode = $(this).val();
					scope.updateAddress(zipCode);

					$el.find('[disabled=disabled]').removeAttr('disabled');

					scope.$digest();
				});
			}
		};
	}

	angular
		.module('AFModule')
		.directive('afDirective', [AFDirective]);

}());
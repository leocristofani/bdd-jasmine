(function () {

	'use strict';

	function AFDirective() {

		return {
			link: function(scope, element, attrs) {

				var zipCodeField = attrs['zipcodeField'];

				var $el = $(element);

				$el.find('[name='+ zipCodeField +']').on('blur', function() {

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
(function () {

	'use strict';

	describe('AFService', function () {

		var AFService, httpBackend, mockAddress;

		/**
		 * 1. The first thing you need before testing an Angular object,
		 * is to make the Angular object's module available.
		 * The module() callback is made available by angular-mocks.js
		 */
		beforeEach(module('AFModule'));

		/**
		 * 2. Then you need to prepare the Angular object you want to test,
		 * together with it's dependencies.
		 */
		beforeEach(inject(function (_AFService_, $httpBackend) {

			AFService = _AFService_;
			httpBackend = $httpBackend;

			mockAddress = {
				cep: '02011200',
				uf: "SP"
			};

			/**
			 * 3. Most of the time, Angular Services are responsible for communicating with
			 * the backend API. So, we need to mock the backend endpoints.
			 */
			var url = ['http://cep.correiocontrol.com.br/', mockAddress.cep, '.json'].join('');
			httpBackend.whenGET(url).respond(mockAddress);
		}));

		/**
		 * 4. After you've used the mocked backend endpoints,
		 * you need to call flush() on the httpBackend object.
		 */
		afterEach(function () {
			httpBackend.flush();
		});

		it('should get address from zipCode', function () {
			AFService.getAddressFromZipCode(mockAddress.cep).success(function (address) {
				expect(address.uf).toEqual(mockAddress.uf);
				expect(address.cep).toEqual(mockAddress.cep);
			});
		});

	});

}());
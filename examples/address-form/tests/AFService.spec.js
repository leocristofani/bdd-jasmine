(function () {

	'use strict';

	describe('AFService', function () {

		var AFService, httpBackend, mockZipCode;

		beforeEach(module('AFModule'));

		beforeEach(inject(function (_AFService_, $httpBackend) {
			AFService = _AFService_;
			httpBackend = $httpBackend;

			mockZipCode = '02011200';
			var url = ['http://cep.correiocontrol.com.br/', mockZipCode, '.json'].join('');
			httpBackend.whenGET(url).respond({
				bairro: "Santana",
				logradouro: "Rua Voluntários da Pátria",
				cep: "02011200",
				uf: "SP",
				localidade: "São Paulo"
			});
		}));

		afterEach(function () {
			httpBackend.flush();
		});

		it('should get address from zipCode', function () {
			AFService.getAddressFromZipCode(mockZipCode).success(function (address) {
				expect(address.uf).toEqual('SP');
				expect(address.cep).toEqual(mockZipCode);
			});
		});

	});

}());
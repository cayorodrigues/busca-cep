angular.
  module('buscaCepApp').
  service('Imovel', function() {
    this.imoveis = [
      {
        cep: '74491-853',
        logradouro: 'Rua Goiás',
        complemento: '',
        bairro: 'Residencial Mundo Novo 1',
        localidade: 'Goiânia',
        uf: 'GO'
      }
    ];

    this.getImoveis = function() {
      return this.imoveis;
    }

    this.addImovel = function(imovel) {
      this.imoveis.push(imovel);
    }
  });
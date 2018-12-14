angular.
  module('buscaCepApp').
  component('imovelList', {
    templateUrl: 'imovel-list/imovel-list.template.html',
    controller: function ImovelListController(Imovel) {
      this.imoveis = Imovel.getImoveis();
    }
  });
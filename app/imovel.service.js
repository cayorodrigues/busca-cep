angular.
  module('buscaCepApp').
  service('Imovel', function($http) {
    this.imoveis = [];

    this.getImoveis = function() {
      $http.get('http://localhost:8080/api/imoveis').
        then((response) => {
          this.imoveis = response.data;
        }, (err) => {
          console.log(err);
        });
        return this.imoveis;
    }

    this.addImovel = function(imovel) {
      this.imoveis.push(imovel);

      /*$http.post('http://localhost:8080/api/imoveis', imovel).
        then((response) => {
          console.log(response);
        }, (err) => {
          console.log(err);
        });*/
    }
  });
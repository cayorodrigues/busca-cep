angular.
  module('buscaCepApp').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: function HomeController($scope, $http, $location, Imovel) {
      this.logradouro = '';
      $scope.cepSelecionado = {};

      $scope.submitBusca = function() {
        if(this.logradouro && this.logradouro.length >= 3) {
          $http.get(`http://localhost:8080/api/busca/${this.logradouro}`).
            then(function(response) {
              $scope.ceps = response.data;
            }, function(err) {
              console.log(err);
            });
        }
      }

      $scope.selecionar = function(cep) {
        $scope.cepSelecionado = cep;
      }

      $scope.submitImovel = function () {
        Imovel.addImovel($scope.cepSelecionado);
        $location.path('/imoveis');
      }
    }
  });
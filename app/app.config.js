angular.
  module('buscaCepApp').
  config(['$routeProvider', 
    function config($routeProvider) {
      $routeProvider.
        when('/imoveis', {
          template: '<imovel-list></imovel-list>'
        }).
        when('/', {
          template: '<home></home>'
        }).
        otherwise('/');
    }
  ]);
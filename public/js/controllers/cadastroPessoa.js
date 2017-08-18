hypatiaApp.controller('pessoaController', ['$scope','$http','$stateParams','PessoaService', function($scope, $http, $stateParams, PessoaService) {

    if ($stateParams.id != null) {

        $scope.loading = true;
        PessoaService.getOne($stateParams.id)
            .then(function(response){
                $scope.registro = response.data;
                $scope.loading = false;
            });


    } else {
        $scope.registro = { };

        $scope.loading = true;
        PessoaService.get()
            .then(function(response){
                $scope.lista = response.data;
                $scope.loading = false;
            });

    }


    $scope.remover=function(registro) {
        $scope.loading = true;

        PessoaService.delete(registro._id)
            .then(function(response) {
                $scope.loading = false;
                $scope.registro = {};
                $scope.lista = response.data;
            });
    }

    $scope.salva=function() {
        $scope.loading = true;

        // call the create function from our service (returns a promise object)
        PessoaService.create($scope.registro)
            // if successful creation, call our get function to get all the new todos
            .then(function(response) {
                $scope.loading = false;
                $scope.registro = response.data;
                $scope.mensagem = {texto: 'Pessoa salva com sucesso!'};
            });
    }


    $('[data-toggle=confirmation]').confirmation({
    rootSelector: '[data-toggle=confirmation]',
    // other options
    });
}]);
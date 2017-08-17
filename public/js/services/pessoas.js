hypatiaApp.service('PessoaService', ['$http', function($http) {
		this.get =  function() {
				return $http.get('/api/pessoas');
			};
		this.getOne =  function(id) {
				return $http.get('/api/pessoa/' + id);
			};
		this.create = function(todoData) {
				return $http.post('/api/pessoas', todoData);
			};
		this.delete = function(id) {
				return $http.delete('/api/pessoas/' + id);
			};
			
	}]);
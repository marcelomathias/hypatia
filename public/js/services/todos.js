hypatiaApp.service('TodoService', ['$http', function($http) {
		this.get =  function() {
				return $http.get('/api/todos');
			};
		this.create = function(todoData) {
				return $http.post('/api/todos', todoData);
			};
		this.delete = function(id) {
				return $http.delete('/api/todos/' + id);
			};
			
	}]);
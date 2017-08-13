hypatiaApp.controller('mainController', ['$scope','$http','TodoService', function($scope, $http, TodoService) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		TodoService.get()
			.then(function(response) {
				$scope.todos = response.data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				TodoService.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.then(function(response) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = response.data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			TodoService.delete(id)
				// if successful creation, call our get function to get all the new todos
				.then(function(response) {
					$scope.loading = false;
					$scope.todos = response.data; // assign our new list of todos
				});
		};
	}]);
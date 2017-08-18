var Todo = require('./models/todo');
var Pessoa = require('./models/pessoa');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

function getPessoas(res) {
	Pessoa.find(function(err, pessoas) {

		if (err)
			res.send(err)

		res.json(pessoas);

	});

}

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});



	app.get('/api/pessoas', function(req, res) {

		// use mongoose to get all todos in the database
		getPessoas(res);
	});


	app.get('/api/pessoa/:pessoa_id', function(req, res) {
		
		Pessoa.findOne({ _id : req.params.pessoa_id }, function(err, pessoa) {
			if (err)
				res.send(err);

			res.json(pessoa);
		});

	});

	app.post('/api/pessoa', function(req, res) {

		if (req.body._id == null) {

			// create a todo, information comes from AJAX request from Angular
			Pessoa.create({
				nome : req.body.nome,
				email : req.body.email
			}, function(err, pessoa) {
				if (err)
					res.send(err);

				pessoa
			});

		} else {

			// create a todo, information comes from AJAX request from Angular
			Pessoa.update({
				nome : req.body.nome,
				email : req.body.email
			}, function(err, pessoa) {
				if (err)
					res.send(err);
				pessoa
			});


		}

	});



	// delete a todo
	app.delete('/api/pessoa/:pessoa_id', function(req, res) {
		Pessoa.remove({
			_id : req.params.pessoa_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getPessoas(res);
		});
	});




	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
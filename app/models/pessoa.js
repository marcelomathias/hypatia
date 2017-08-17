var mongoose = require('mongoose');

module.exports = mongoose.model('Pessoa', {
	nome : {type : String, default: ''},
    email : {type : String, default: ''},
    senha : {type : String, default: ''}
});
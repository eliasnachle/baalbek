var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;
 

/* ROTA QUE RECUPERA AS PUBLICAÇÕES (RESENHAS) */
router.get('/', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT 
    idPublicacao,
	img,
	titulo,
	autor,
	descricao,
	nota
    FROM tbpublicacao
	WHERE categoria = 'resenha'`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

router.get('/teorias', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT 
    idPublicacao,
	img,
	titulo,
	autor,
	descricao,
	nota
    FROM tbpublicacao
	WHERE categoria = 'teoria'`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;

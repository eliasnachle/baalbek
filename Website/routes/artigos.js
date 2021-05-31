var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Artigo = require('../models').Artigo;
 
/* ROTA QUE RECUPERA TODOS OS ARTIGOS */
router.get('/:fkPublicacao', function(req, res, next) {

	var fkPublicacao = req.params.fkPublicacao;

	console.log(fkPublicacao);

    let instrucaoSql = `SELECT 
    idArtigo,
	subTitulo1,
	p1,
	subTitulo2,
	p2
    FROM tbArtigo
	WHERE fkPublicacao = ${fkPublicacao}`;

	sequelize.query(instrucaoSql, {
		model: Artigo,
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

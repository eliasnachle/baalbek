var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Artigo = require('../models').Artigo;

// /* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idUsuario', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUsuario = req.params.idUsuario;

    Publicacao.create({
        descricao: req.body.descricao,
        fkUsuario: idUsuario
    }).then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
}) 

/* ROTA QUE RECUPERA TODAS OS ARTIGOS */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os artigos');
	
    let instrucaoSql = `SELECT 
    idArtigo,
	subTitulo1,
	p1,
	subTitulo2,
	p2
    FROM tbArtigo
	WHERE idArtigo = 3000`;

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


// /* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
// router.get('/:idUsuario', function(req, res, next) {
// 	console.log('Recuperando todas as publicações');
	
// 	var idUsuario = req.params.idUsuario;

//     let instrucaoSql = `SELECT 
//     img,titulo,autor,nota
//     FROM tbpublicacao;`;

// 	sequelize.query(instrucaoSql, {
// 		model: Publicacao,
// 		mapToModel: true 
// 	})
// 	.then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);
// 		res.json(resultado);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
// 	});
// });

module.exports = router;

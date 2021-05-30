'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		id: {
			field: 'idPublicacao',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        titulo: {
            field: 'titulo',
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        autor: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        nota: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            field: 'img',
            type: DataTypes.STRING,
            allowNull: false
        }
	}, 
	{
		tableName: 'tbPublicacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};

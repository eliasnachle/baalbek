'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Artigo = sequelize.define('Artigo',{	
		idArtigo: {
			field: 'idArtigo',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        subTitulo1: {
            field: 'subTitulo1',
            type: DataTypes.TEXT,
            allowNull: false
        },
        p1: {
            field: 'p1',
            type: DataTypes.TEXT,
            allowNull: false
        },
        subTitulo2: {
            field: 'subTitulo2',
            type: DataTypes.TEXT,
            allowNull: false
        },
        p2: {
            field: 'p2',
            type: DataTypes.TEXT,
            allowNull: false
        }
	}, 
	{
		tableName: 'tbArtigo', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Artigo;
};

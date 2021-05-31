USE dbbaalbek;
SELECT * FROM tbUsuario;

CREATE TABLE tbAcessos(
	idAcesso INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(40),
    dtAcesso DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkPublicacao INT,
    fkUsuario INT,
    FOREIGN KEY (fkPublicacao) REFERENCES tbPublicacao(idPublicacao),
    FOREIGN KEY (fkUsuario) REFERENCES tbUsuario(idUsuario)
);

CREATE TABLE tbartigo (
  `idArtigo` int NOT NULL AUTO_INCREMENT,
  `subTitulo1` text,
  `p1` text,
  `subTitulo2` text,
  `p2` text,
  `fkPublicacao` int DEFAULT NULL,
  PRIMARY KEY (`idArtigo`),
  KEY `fkPublicacao` (`fkPublicacao`),
  CONSTRAINT `tbartigo_ibfk_1` FOREIGN KEY (`fkPublicacao`) REFERENCES `tbpublicacao` (`idPublicacao`)
) ENGINE=InnoDB AUTO_INCREMENT=3018 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tbpublicacao` (
  `idPublicacao` int NOT NULL AUTO_INCREMENT,
  `img` varchar(50) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `descricao` text,
  `autor` varchar(45) DEFAULT NULL,
  `nota` varchar(3) DEFAULT NULL,
  `categoria` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idPublicacao`)
) ENGINE=InnoDB AUTO_INCREMENT=1025 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tbusuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `login` varchar(45) DEFAULT NULL,
  `senha` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
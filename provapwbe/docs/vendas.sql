-- SQL do banco de dados de Tarefas a fazer
DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas CHARSET=UTF8 COLLATE utf8_general_ci;
USE vendas;


CREATE TABLE vendedores(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    matricula varchar(50) not null,
);

CREATE TABLE produtos(
    id integer not null primary key auto_increment,
    nome varchar(60) not null,
    valor float (7,2) not null, 
);

CREATE table vendas(
    id integer not null primary key auto_increment,
    vendata date not null,
    quantidade integer not null, 
    produtoid int not null ,
    vendedorid int not null,
    foreign key (produtoid) references produtos(id),
    foreign key (vendedorid) references vendedores(id),
)

INSERT INTO vendedores (nome, matricula)
VALUES
  ('Stefany Antonella', '14644'),
  ('Stella Viana', '01516'),
  ('Tomas Isaac', '50913'),
  ('Osvaldo Galvão', '72193')

  INSERT INTO produtos (nome, valor) VALUES
('samsung galaxy m52',2211.11)
('motorola moto g42', 1499.00)
('rainha das chamas', 36.90)
('cronicas saxonicas - o cavaleiro da morte', 57.90)
('o milagre da manhã', 56.59)
('lavadoura de roupas brastemp', 2199.00)
('fogao 4 bocas', 899.00)

INSERT INTO vendas (vendata, quantidade,produtoid,vendedorid) VALUES
(2023-04-18 09:08:39,'2'),
(2023-04-18 09:08:39,'1'),
(2023-04-18 09:08:39,'3'),
(2023-04-18 09:08:39,'1'),
(2023-04-18 09:08:39,'2'),
(2023-04-18 09:08:39,'1')
drop database if exists prova;
create database prova charset=UTF8 collate utf8_general_ci;
use prova;

create table alunos(
    id_aluno int not null auto_increment primary key,
    nome varchar(30) not null,
    nascimento date not null
);

create table cursos(
    id_curso int not null auto_increment primary key,
    curso varchar(50) not null,
    duracao int not null
);

create table cursados(
    id_aluno int not null,
    id_curso int not null,
    data date not null,
    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_curso) references cursos(id_curso)
);

describe alunos;
describe cursos;
describe cursados;
show tables;

insert into alunos values
(1, "Jair Messias Oliveira", "2001/08/25"),
(2, "Otávio Martins", "2000/11/21"),
(3, "Michelle Mattos Silva", "1999/06/05"),
(4, "Carolina Souza Cruz", "2003/08/02");

insert into cursos values
(1, "Desvendando Indústria 4.0", 20),
(2, "Economia Circular", 20),
(3, "Desvendando o BlockChain", 20);

insert into cursados values
(1, 1, "2022/11/21"),
(1, 2, "2022/11/21"),
(2, 1, "2022/11/21"),
(2, 2, "2022/11/21"),
(2, 3, "2022/11/22"),
(3, 2, "2022/11/22"),
(4, 3, "2022/11/22"),
(3, 3, "2022/11/22"),
(4, 1, "2022/11/22");

select * from alunos;
select * from cursos;
select * from cursados;
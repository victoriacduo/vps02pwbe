const conDB = require('../conDB.js');
const aluninhos = require('../models/alunos.js');

class cursando {
    constructor(data) {
        this.data = data
    }
    aluno = {}
    addAluno(a) {
        this.aluno = a
    }
    curso = {}
    addCurso(c) {
        this.curso = c
    }
}
class alunos {
    constructor(id, nome, nascimento) {
        this.id = id
        this.nome = nome
        this.nascimento = nascimento
    }
}
class cursos {
    constructor(id, curso, duracao) {
        this.id = id
        this.curso = curso
        this.duracao = duracao
    }
}

const getAlunos = (req, res) => {
    conDB.query(aluninhos.getAlunos(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const createAluno = (req, res) => {
    conDB.query(aluninhos.createAluno(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

const updateAluno = (req, res) => {
    conDB.query(aluninhos.updateAluno(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    })
}

const deleteAluno = (req, res) => {
    conDB.query(aluninhos.deleteAluno(req.params), (err, result) => {
        if(err == null){
            res.status(200).json(req.params).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

const toreadAluno = (req, res) => {
    conDB.query(aluninhos.toreadAluno(req.params), (err, result) => {
        if (err == null){
            let composite = []
            result.forEach((e, index) => {
                let cursado = new cursando(e.data)
                let a = new alunos(e.idAluno, e.nome, e.nascimento)
                let c = new cursos(e.idCurso, e.curso, e.duracao)
                cursado.addAluno(a)
                cursado.addCurso(c)
                composite.push(cursado)
                if (index == result.length - 1) {
                    res.json(composite).end()
                }
            });
        }
        else
            res.status(500).json(err).end();
    });
}

module.exports = {
    getAlunos,
    createAluno,
    updateAluno,
    deleteAluno,
    toreadAluno
}
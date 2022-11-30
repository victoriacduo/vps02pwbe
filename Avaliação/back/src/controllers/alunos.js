const conDB = require('../conDB.js');
const aluninhos = require('../models/alunos.js');

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

module.exports = {
    getAlunos,
    createAluno,
    updateAluno,
    deleteAluno
}
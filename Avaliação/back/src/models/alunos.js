const getAlunos = () => {
    return `select * from alunos`;
}

const createAluno = (body) => {
    return `insert into alunos value(default, '${body.nome}', '${body.nascimento}')`;
}

const updateAluno = (body) => {
    return `update alunos set
                nome = '${body.nome}',
                nascimento = '${body.nascimento}'
                where id_aluno = '${body.id_aluno}'`;
}

const deleteAluno = (body) => {
    return `delete from alunos where id_aluno='${body.id_aluno}'`
}

module.exports = {
    getAlunos,
    createAluno,
    updateAluno,
    deleteAluno
}
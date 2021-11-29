module.exports = {
    validaRequisicao(body){
        Object.keys(body).forEach(conteudo => {
            if (typeof body[conteudo] !== 'string' || body[conteudo].length === 0) {
                throw new Error(`O campo ${conteudo} está inválido!`);
            }
        })
    }
}
var aluno = [{nome:"breno", age:"12"}, {nome:"joao", age:"9"}, {nome:"pedro", age:"22"}]

function encontrar(lista, nomeQueQueroAchar){
    var alunoEncontrado = lista.find(elemento => elemento.nome === nomeQueQueroAchar);
    return alunoEncontrado;
}

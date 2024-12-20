export default function trataErros(erro) {
  if (erro.code === 'ENOENT') {
    return new Error('Arquivo não encontrado');
  } else {
    return 'Erro na aplicação';
  }
}
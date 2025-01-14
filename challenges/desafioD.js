/*
  Atribua a data corrente ao campo ultimaModificacao no
  sanduíche Big Mac.

  Para isso, escreva no arquivo desafioD.js duas queries,
  nesta ordem:

  Crie uma query que atribua a data corrente ao campo
  ultimaModificacao no sanduíche Big Mac. Para a data corrente
  faça uso do tipo Date.

  Crie uma query que retorne o nome de todos os documentos em
  que o campo ultimaModificacao existe.
*/

db.produtos.update({ nome: "Big Mac" }, {
  $currentDate: { ultimaModificacao: { $type: "date" } },
});

db.produtos.find({ ultimaModificacao: { $exists: true } }, {
  nome: true,
  _id: false,
});

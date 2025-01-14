/*
  Remova o último ingrediente do sanduíche Cheddar McMelt.

  Para isso, escreva no arquivo desafioI.js duas queries,
  nesta ordem:

  Crie uma query que faça a remoção do último ingrediente no
  sanduíche Cheddar McMelt.

  Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.updateMany({ nome: "Cheddar McMelt" }, {
  $pop: { ingredientes: 1 },
});

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});

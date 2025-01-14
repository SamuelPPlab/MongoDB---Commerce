/*
  Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.

  Para isso, escreva no arquivo desafioH.js duas queries, nesta ordem:

  Crie uma query que faça a remoção do primeiro ingrediente no sanduíche
  Quarteirão com Queijo.

  Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, {
  $pop: { ingredientes: -1 },
});

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});

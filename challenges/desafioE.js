/*
  Adicione ketchup aos ingredientes para todos os sanduíches menos o
  McChicken, garantindo que não haja duplicidade nos ingredientes.

  Para isso, escreva no arquivo desafioE.js duas queries, nesta ordem:

  Crie uma query que adicione ketchup aos ingredientes para todos os
  sanduíches menos o McChicken, garantindo que não haja duplicidade nos
  ingredientes.

  Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.update({ nome: { $not: { $regex: /McChicken/ } } }, {
  $addToSet: { ingredientes: "ketchup" },
},
false,
true);

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});

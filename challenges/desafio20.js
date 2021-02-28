/*
Remova o campo curtidas do item Big Mac.

Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

Crie uma query que faça a remoção do campo curtidas do item Big Mac.

Crie uma query que retorne o nome e curtidas de todos os documentos.
*/

db.produtos.update({ nome: "Big Mac" }, {
    $unset: { "curtidas": "" },
  });

db.produtos.find({}, {
    nome: true,
    _id: false,
    curtidas: true,
});
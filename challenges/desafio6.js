/*
Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.

Para isso, escreva no arquivo desafio6.js duas queries, nesta ordem:

Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.

Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.update({ $or: [{ nome: "Big Mac" }, { nome: "Quarteirão com Queijo" }] }, {
    $push: { ingredientes: { $each: ["bacon"] } },
  },
  false,
  true,
);

db.produtos.find({}, {
    nome: true,
    ingredientes: true,
    _id: false,
  });

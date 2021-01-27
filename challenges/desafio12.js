db.produtos.updateMany(
  {},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);

/* honestidade acadêmica e gratidão ao PR do Luiz Mello:
link do PR: https://github.com/tryber/sd-06-mongodb-commerce/pull/83/files
que me fez ver que não precisava acessar a estrutura "valoresNutricionais.percentual",
somente percentual resolvia o problema */

db.produtos.find(
  {},
  { nome: 1, valoresNutricionais: 1, _id: 0 },
).pretty();

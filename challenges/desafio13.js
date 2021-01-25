
// show2. Crie uma query que retorne o `nome` e `tags` de todos os documentos. */

db.produtos.updateMany(
  { valoresNutricionais:
    { $elemMatch: { tipo: "sódio", percentual: { $gt: 40 } } } },
  { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 }).pretty();

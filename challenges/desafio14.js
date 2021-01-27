db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $in: [20, 40] } } },
  $addToSet: { tags: "contém sódio" } });

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

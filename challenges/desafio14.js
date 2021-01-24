db.produtos.updatesMany(
  { valoresNutricionais:
    { $elemMatch: { tipo: "sódio", percentual: { $gte: 20, $lte: 40 } } },
  },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find(
  {},
  { nome: 1, _id: 0, tags: 1 },
);

db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.2.tipo": "sódio" },
      { $or: [
        { "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 } },
      ] },
    ],
  },
  { $push: {
    tags: "contém sódio",
  } },
);

db.produtos.find(
  { },
  {
    nome: 1,
    tags: 1,
    _id: 0,
  },
);

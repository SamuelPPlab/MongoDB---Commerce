db.produtos.updateMany(
  { "valoresNutricionais.tipo": "sódio",
    "valoresNutricionais.percentual": { $gt: 20, $lt: 40 },
  },
  {
    $push: { tags: "contém sódio" },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
).pretty();

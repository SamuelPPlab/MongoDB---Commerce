db.produtos.updateMany(
  { valoresNutricionais: {
    $elemMatch:
      { { tipo: "sódio" },
    $and: [{ percentual: { $gt: 20 } }, { percentual: { $lt: 40 } }] } },
  },
);

db.produtos.find(
  { nome: 1, tags: 1, _id: 0 },
);

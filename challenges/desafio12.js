db.produtos.updateMany(
  { },
  { $push: { valoresNutrionais: {
    $each: [], $sort: { percentual: -1 } },
  }, },
);

db.produtos.find(
  { },
  { nome: 1, valoresNutrionais: 1, _id: 0 },
);

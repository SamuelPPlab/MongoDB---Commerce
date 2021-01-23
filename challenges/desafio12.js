db.produtos.find().sort(
  { "valoresNutricionais.$.percentual": -1 },
);

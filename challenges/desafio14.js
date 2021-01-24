db.produtos.updateMany({ "valoresNutricionais.tipo": "sódio" },
  { $and:
    [
      { "valoresNutricionais.percentual": { $gte: 20 } },
      { "valoresNutricionais.percentual": { $lte: 40 } },
    ],
  },
  { $push: { valoresNutricionais: { $each: ["contém sódio"] } } });
db.produtos.find({ }, { nome: true, tags: true, _id: false });

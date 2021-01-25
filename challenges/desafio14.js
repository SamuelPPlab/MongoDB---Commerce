db.produtos.updateMany({
  "valoresNutricionais.percentual": { $gt: 20, $lt: 40 },
  "valoresNutricionais.tipo": "sódio",
}, {
  $push: { tags: {
    $each: ["contém sódio"],
  } },
});
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

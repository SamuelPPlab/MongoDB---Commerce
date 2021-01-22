db.produtos.updateMany(
  { valoresNutricionais: {
    $all: [
      { $elemMatch: { tipo: { $eq: "sódio" } } },
      { $elemMatch: { percentual: { $gt: 20, $lt: 40 } } },
    ] },
  },
  {
    $push: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

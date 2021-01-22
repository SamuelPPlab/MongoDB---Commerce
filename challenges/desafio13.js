db.produtos.updateMany(
  { valoresNutricionais: {
    $all: [
      { $elemMatch: { tipo: { $eq: "sódio" } } },
      { $elemMatch: { percentual: { $gte: 40 } } },
    ] },
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

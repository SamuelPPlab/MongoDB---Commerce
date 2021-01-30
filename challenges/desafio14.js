db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: {
          $lt: 40,
          $gt: 20,
        },
      },
    },
  },
  {
    $addToSet: { tags: "contém sódio" },
  },
);

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    tags: true,
  },
);

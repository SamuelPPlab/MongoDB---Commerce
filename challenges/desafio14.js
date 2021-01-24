db.produtos.updateMany(
  { valoresNutricionais:
    { $elemMatch:
      { percentual: { $gte: 20, $lte: 40 }, tipo: "sódio" },
    }
  },
  { $push: { tags: { $each:["contém sódio"] } } });
db.produtos.find({ }, { nome: true, tags: true, _id: false }
  );

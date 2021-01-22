db.produtos.updateMany(
  { tags: {
    $elemMatch:
      { tipo: "sódio", percentual: { $gt: 20, $lt: 40 } },
  } },
);

db.produtos.find(
  { nome: 1, tags: 1, _id: 0 },
);

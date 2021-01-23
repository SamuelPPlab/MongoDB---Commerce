db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  {
    $addToSet: {
      ingredientes: "ketchup",
    },
  },
);

db.produtos.find(
  { nome: { $ne: "McChicken" } },
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);

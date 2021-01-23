db.produtos.updateMany(
  { nome: { $not: { $eq: "McChicken" } } },
  { $addToSet: { ingredientes: "ketchup" } },
);

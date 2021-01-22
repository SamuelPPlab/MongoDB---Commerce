db.produtos.updateMany(
  { $not: { name: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
  { $upsert: true },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.protudos.find({}, { _id: 0, nome: 1, ingredientes: 1 });

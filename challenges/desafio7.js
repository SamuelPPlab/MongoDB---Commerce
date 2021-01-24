db.products.updateMany(
  { },
  { $pull: { ingredientes: "cebola" } },
);

db.products.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);

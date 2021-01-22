db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingrediente: 1 } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingrediente: 1 });

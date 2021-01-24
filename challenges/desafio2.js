db.produtos.updateMany(
  { valorUnitario: { $exits: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find(
  { },
  { nome: 1, valorUnitario: 1, _id: 0 },
);

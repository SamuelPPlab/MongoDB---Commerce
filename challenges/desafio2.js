db.produtos.updateMany(
  {},
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find({ valorUnitario: { $exists: true } }, { nome: 1, valorUnitario: 1, _id: 0 });

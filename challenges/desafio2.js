db.produtos.update({}, { $set: { valorUnitario: NumberDecimal("0.00") } }, true, true);

db.produtos.find({}, {
  nome: true,
  valorUnitario: true,
  _id: false,
});

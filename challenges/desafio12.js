db.produtos.updateMany(
  {},
  { $push: { valoresNuricionais: { $each: [], $sort: -1 } } },
);

db.produtos.find({}, { _id: 0, nome: 1, valoresNuricionais: 1 });

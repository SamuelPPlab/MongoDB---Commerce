db.produtos.update(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
  { $upsert: true },
);

db.produtos.update(
  { nome: { $regex: /big/gi } },
  { $set: { "vendasPorDia.3": 60 } },
);

db.produtos.update(
  { tags: { $all: ["bovino", "pão"] } },
  { $set: { "vendasPorDia.6": 120 } },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });

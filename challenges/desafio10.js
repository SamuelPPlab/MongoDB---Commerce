db.produtos.update({}, {
  $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
},
false,
true);

db.produtos.update({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });

db.produtos.update({ tags: { $all: ["bovino", "pão"] } }, { $set: { "vendasPorDia.6": 120 } });

db.produtos.find({}, {
  nome: true,
  vendasPorDia: true,
  _id: false,
});

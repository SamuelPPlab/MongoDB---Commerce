db.produtos.update({}, { $set: { avaliacao: NumberInt(0) } }, true, true);

db.produtos.update({ tags: { $all: ["bovino"] } }, {
  $set: { avaliacao: NumberInt(5) },
},
false,
true);

db.produtos.update({ tags: { $all: ["ave"] } }, {
  $set: { avaliacao: NumberInt(3) },
},
false,
true);

db.produtos.find({}, {
  nome: true,
  avaliacao: true,
  _id: false,
});

db.products.updateMany(
  { },
  { $set: { avaliacao: NumberInt("0") } },
);

db.products.updateMany(
  { tags: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

db.products.updateMany(
  { tags: { $all: ["ave"] } },
  { $inc: { $inc: 3 } },
);

db.products.find(
  { },
  { nome: 1, avaliacao: 1, _id: 0 },
);

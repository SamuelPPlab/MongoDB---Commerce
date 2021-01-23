const currentDate = Date();

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: currentDate } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);

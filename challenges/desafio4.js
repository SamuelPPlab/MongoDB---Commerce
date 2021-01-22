db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: newDate() } },
  { $upsert: true },
);

db.produtos.find({ ultimaModificacao: { $existis: true } }, { nome: 1, _id: 0 });

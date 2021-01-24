db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { $ultimaModificacao: true } },
);

db.products.find(
  { ultimaModificacao: { $exists: 1 } },
  { nome: 1, _id: 0 },
);

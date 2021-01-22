db.produtos.updateMany(
  { nome: "Big Mac" },
  {
    $currentDate: { ultimaModificacao: { $type: "date" } },
  },
);

db.produtos.findOne(
  {
    ultimaModificacao: { $exists: true },
  },
  { nome: 1, _id: 0 },
);

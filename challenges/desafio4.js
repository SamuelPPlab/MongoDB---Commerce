db.produtos.updateMany(
  {},
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

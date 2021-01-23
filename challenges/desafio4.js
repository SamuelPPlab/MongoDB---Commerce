db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate:
    {
      ultimaModificacao: true,
    },
  },
);

db.produtos.find(
  { ultimaModificacao: { $exist: true } },
  { nome: true, _id: false },
);

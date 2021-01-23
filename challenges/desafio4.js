db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: ISOdate() } });
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1, ultimaModificacao: 1 },
);

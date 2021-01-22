db.produtos.updateOne({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.produtos.find({}, { nome: 1, ultimaModificacao: 1, _id: 0 });

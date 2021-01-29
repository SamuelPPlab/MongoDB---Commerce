db.produtos.updateMany({ nome: "Big Mac" }, { dataCorrente: new Date() });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });

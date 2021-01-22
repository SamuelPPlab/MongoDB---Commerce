db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: new Date() } }, { $upsert: 1 });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });

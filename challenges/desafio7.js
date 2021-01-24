db.produtos.update({}, { $pull: { ingredientes: "cebola" } }, { multi: true });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

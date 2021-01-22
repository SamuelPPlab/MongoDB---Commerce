db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { items: 1 } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

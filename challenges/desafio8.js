db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pop: { items: -1 } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

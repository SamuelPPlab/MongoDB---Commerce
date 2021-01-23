db.produtos.updateOne({ nome: "Quarteirao com Queijo" }, { $pop: { ingredientes: -1 } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 }).pretty();

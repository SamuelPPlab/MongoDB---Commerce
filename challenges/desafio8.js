db.produtos.updateOne({ nome: "Quareirão com Queijo" },
  { $pop: { ingredientes: -1 } });
